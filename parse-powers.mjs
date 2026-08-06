// parse-powers.mjs
// Parses content/Firmament/00 Feature Brainstorm/Rules/Wild Talents/Powers.md
// and writes quartz/static/powers-data.json for Powers.html to fetch.
//
// Run before build:
//   node parse-powers.mjs
// Or add to package.json scripts:
//   "prebuild": "node parse-powers.mjs"

import { readFileSync, writeFileSync, mkdirSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const INPUT  = join(__dirname, "content/Firmament/00 Feature Brainstorm/Rules/Wild Talents/Powers.md")
const OUTPUT = join(__dirname, "quartz/static/powers-data.json")

function stripMarkdown(text) {
  return text
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, alias) => alias || target.split("#").pop())
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/#(\w+)/g, "#$1")
    .trim()
}

function parsePowers(md) {
  const powers = []
  const blocks = md.split(/(?=^#### )/m)

  for (const block of blocks) {
    const lines = block.split("\n")
    if (!lines[0].startsWith("#### ")) continue

    const nameMatch = lines[0].match(/^#### ([^(]+)/)
    if (!nameMatch) continue
    const name = nameMatch[1].replace(/,\s*Variable.*$/i, "").trim()

    let cost = null, tags = [], prereqRaw = null, enhance = null, restriction = null
    let lastBulletIdx = 0

    for (let i = 0; i < lines.length; i++) {
      const l = lines[i].trim()
      if (l.startsWith("- **") || l.startsWith("* **")) lastBulletIdx = i

      const costM = l.match(/\*\*Point Cost:\*\*\s*([+\-−]?\d+)/)
      if (costM) cost = costM[1].replace("−", "-")

      const tagM = l.match(/\*\*Tag:\*\*\s*(.+)/)
      if (tagM) tags = [...tagM[1].matchAll(/#(\w+)/g)].map(x => x[1])

      const preM = l.match(/\*\*Prerequisite:\*\*\s*(.+)/)
      if (preM && preM[1].trim().toLowerCase() !== "none") prereqRaw = preM[1].trim()

      const enhM = l.match(/^\*\*Enhance\s*\([^)]+\)[*:]+\s*(.+)/)
      if (enhM) enhance = stripMarkdown(enhM[1])

      const resM = l.match(/^\*\*Restriction[.:]\*\*\s*(.+)/)
      if (resM) restriction = stripMarkdown(resM[1])
    }

    // Infer cost from heading if missing
    if (!cost) {
      const headingCost = lines[0].match(/\(([+\-−]?\d+)\)/)
      if (headingCost) cost = headingCost[1].replace("−", "-")
    }
    if (!cost || !tags.length) continue

    // Build display tags: base tags + any affinity tags from prereq
    const displayTags = [...tags]
    if (prereqRaw) {
      const prereqTags = [...prereqRaw.matchAll(/#(\w+)/g)].map(x => x[1])
      prereqTags.forEach(t => { if (!displayTags.includes(t)) displayTags.push(t) })
    }
    // Add Elemental tag for variable elemental powers
    if (["Acidic","Burning","Electrocuting","Frigid"].includes(name) && !displayTags.includes("Elemental")) {
      displayTags.push("Elemental")
    }

    const prereq = prereqRaw ? stripMarkdown(prereqRaw) : null
    const flaw = parseInt(cost) < 0

    const bodyLines = lines.slice(lastBulletIdx + 1)
    const bodyText = bodyLines.join("\n")
    const isVariable = /\n#(Strike|Aegis|Vitality)\s/m.test(bodyText)

    let desc = ""
    if (isVariable) {
      const variants = []
      const variantRx = /#(Strike|Aegis|Vitality)\s+([\s\S]+?)(?=\n#(?:Strike|Aegis|Vitality)\s|\n\*\*Enhance|\n---|\n####|$)/g
      for (const m of bodyText.matchAll(variantRx)) {
        const varTag = m[1]
        const varBody = m[2]
          .replace(/\*\*Enhance[^\n]*/g, "")
          .replace(/\*\*Restriction[^\n]*/g, "")
          .split("\n").map(l => l.trim()).filter(Boolean)
          .map(stripMarkdown).join(" ")
        if (varBody) variants.push(`#${varTag}: ${varBody}`)
      }
      desc = variants.join(" | ")
    } else {
      const descLines = []
      for (let i = 0; i < bodyLines.length; i++) {
        const l = bodyLines[i].trim()
        if (!l) continue
        if (l.startsWith("**Enhance") || l.startsWith("**Restriction") ||
            l.startsWith("---") || l.startsWith("###")) break
        descLines.push(stripMarkdown(l))
      }
      desc = descLines.join(" ").trim()
    }

    if (!desc) desc = "(See source document for full description.)"

    powers.push({ name, cost, tags: displayTags, prereq, desc, enhance, restriction, flaw })
  }

  return powers
}

try {
  const md = readFileSync(INPUT, "utf8")
  const powers = parsePowers(md)
  mkdirSync(dirname(OUTPUT), { recursive: true })
  writeFileSync(OUTPUT, JSON.stringify(powers, null, 2))
  console.log(`✓ parse-powers: ${powers.length} powers written to ${OUTPUT}`)
} catch (err) {
  console.error("✗ parse-powers failed:", err.message)
  process.exit(1)
}
