---
title: Divine Spells
---

<div class="hero">
  <h1>Divine Spells</h1>
  <p>Magic granted by the gods and powered by faith. Divine spellcasters channel the will of their deity to heal allies, smite enemies, and shape the battlefield.</p>
</div>

## Level 1

```dataview
TABLE WITHOUT ID
  file.link AS "Spell",
  casting-time AS "Casting Time",
  duration AS "Duration",
  components AS "Components",
  casting_requirements AS "Casting Requirements"
FROM "00 Feature Brainstorm/Spell Casting/Rules/V2/Spells/Level 1" AND #DivineTradition
SORT file.name ASC
```

## Level 2

```dataview
TABLE WITHOUT ID
  file.link AS "Spell",
  casting-time AS "Casting Time",
  duration AS "Duration",
  components AS "Components",
  casting_requirements AS "Casting Requirements"
FROM "00 Feature Brainstorm/Spell Casting/Rules/V2/Spells/Level 2" AND #DivineTradition
SORT file.name ASC
```

## Level 3

```dataview
TABLE WITHOUT ID
  file.link AS "Spell",
  casting-time AS "Casting Time",
  duration AS "Duration",
  components AS "Components",
  casting_requirements AS "Casting Requirements"
FROM "00 Feature Brainstorm/Spell Casting/Rules/V2/Spells/Level 3" AND #DivineTradition
SORT file.name ASC
```

## Level 4

```dataview
TABLE WITHOUT ID
  file.link AS "Spell",
  join(filter(file.tags, (t) => t != "#DivineTradition"), ", ") AS "Tags"
FROM "00 Feature Brainstorm/Spell Casting/Rules/V2/Spells/Level 4" AND #DivineTradition
SORT file.name ASC
```

## Level 5

```dataview
TABLE WITHOUT ID
  file.link AS "Spell",
  join(filter(file.tags, (t) => t != "#DivineTradition"), ", ") AS "Tags"
FROM "00 Feature Brainstamp/Spell Casting/Rules/V2/Spells/Level 5" AND #DivineTradition
SORT file.name ASC
```