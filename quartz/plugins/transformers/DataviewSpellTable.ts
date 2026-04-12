import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { Root, Code } from "mdast"
import path from "path"
import fs from "fs"
import matter from "gray-matter"

interface DataviewSpellTableOptions {
  contentFolder: string
}

const defaultOptions: DataviewSpellTableOptions = {
  contentFolder: "content",
}

function parseDataviewQuery(query: string): { folder: string; tag: string } | null {
  const fromMatch = query.match(/FROM\s+"([^"]+)"/)
  const tagMatch = query.match(/AND\s+#(\w+)/)
  if (!fromMatch) return null
  return {
    folder: fromMatch[1],
    tag: tagMatch ? tagMatch[1] : "",
  }
}

function getSpellsFromFolder(
  contentFolder: string,
  folder: string,
  tag: string,
): Array<Record<string, string>> {
  const folderPath = path.join(contentFolder, folder)
  if (!fs.existsSync(folderPath)) return []

  const files = fs.readdirSync(folderPath).filter((f) => f.endsWith(".md"))
  const spells: Array<Record<string, string>> = []

  for (const file of files) {
    const filePath = path.join(folderPath, file)
    const content = fs.readFileSync(filePath, "utf-8")
    const { data, content: body } = matter(content)

    const tags: string[] = data.tags
      ? Array.isArray(data.tags)
        ? data.tags
        : [data.tags]
      : []

    const bodyTags = [...body.matchAll(/#(\w+)/g)].map((m) => m[1])
    const allTags = [...tags, ...bodyTags]

    if (tag && !allTags.some((t) => t.toLowerCase() === tag.toLowerCase())) {
      continue
    }

    // Build correct slug from full path including contentFolder prefix
    const fullRelativePath = path.join("Pathfinder and Dragons Remote", folder, file.replace(".md", ""))
    // Replace spaces with hyphens for URL
    const urlSlug = fullRelativePath.replace(/\s+/g, "-")

    spells.push({
      name: data.title || file.replace(".md", ""),
      slug: urlSlug,
      "casting-time": data["casting-time"] || "—",
      duration: data["duration"] || "—",
      components: data["components"] || "—",
      "casting-requirements": data["casting_requirements"] || data["casting-requirements"] || "—",
    })
  }

  return spells.sort((a, b) => a.name.localeCompare(b.name))
}

function buildHtmlTable(spells: Array<Record<string, string>>): string {
  if (spells.length === 0) {
    return `<p class="dataview-empty">No spells found.</p>`
  }

  const rows = spells
    .map(
      (spell) => `
    <tr>
      <td><a href="/${spell.slug}">${spell.name}</a></td>
      <td>${spell["casting-time"]}</td>
      <td>${spell.duration}</td>
      <td>${spell.components}</td>
      <td>${spell["casting-requirements"]}</td>
    </tr>`,
    )
    .join("")

  return `
<div class="spell-table-wrapper">
  <table class="spell-table">
    <thead>
      <tr>
        <th>Spell Name</th>
        <th>Casting Time</th>
        <th>Duration</th>
        <th>Components</th>
        <th>Casting Requirements</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
</div>`
}

export const DataviewSpellTable: QuartzTransformerPlugin<
  Partial<DataviewSpellTableOptions>
> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "DataviewSpellTable",
    markdownPlugins() {
      return [
        () => (tree: Root) => {
          visit(tree, "code", (node: Code, index, parent) => {
            if (node.lang !== "dataview") return
            if (!parent || index === undefined) return

            const query = node.value
            const parsed = parseDataviewQuery(query)
            if (!parsed) return

            const spells = getSpellsFromFolder(opts.contentFolder, parsed.folder, parsed.tag)
            const html = buildHtmlTable(spells)

            // Replace dataview block with just the static table (hides original dataview block)
            parent.children.splice(index, 1, {
              type: "html",
              value: html,
            } as any)
          })
        },
      ]
    },
  }
}