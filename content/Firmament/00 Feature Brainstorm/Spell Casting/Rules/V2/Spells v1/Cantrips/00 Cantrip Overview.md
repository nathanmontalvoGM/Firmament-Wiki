## Spells by Tradition
```dataview
TABLE WITHOUT ID
  file.link AS "Arcane Cantrips"
FROM "00 Feature Brainstorm/Spell Casting/Spells/Cantrips"
WHERE
  contains(file.etags, "#ArcaneTradition")
SORT file.name ASC
```
```dataview
TABLE WITHOUT ID
  file.link AS "Divine Cantrips"
FROM "00 Feature Brainstorm/Spell Casting/Spells/Cantrips"
WHERE
  contains(file.etags, "#DivineTradition")
SORT file.name ASC
```
```dataview
TABLE WITHOUT ID
  file.link AS "Primal Cantrips"
FROM "00 Feature Brainstorm/Spell Casting/Spells/Cantrips"
WHERE
  contains(file.etags, "#PrimalTradition")
SORT file.name ASC
```
```dataview
TABLE WITHOUT ID
  file.link AS "Occult Cantrips"
FROM "00 Feature Brainstorm/Spell Casting/Spells/Cantrips"
WHERE
  contains(file.etags, "#OccultTradition")
SORT file.name ASC
```

## Cantrips by Stability
```dataview
TABLE WITHOUT ID
  file.link AS "Stable Cantrips"
FROM "00 Feature Brainstorm/Spell Casting/Spells/Cantrips"
WHERE
  contains(file.etags, "#Stable")
SORT file.name ASC
```
```dataview
TABLE WITHOUT ID
  file.link AS "Volatile Cantrips"
FROM "00 Feature Brainstorm/Spell Casting/Spells/Cantrips"
WHERE
  contains(file.etags, "#Volatile")
SORT file.name ASC
```
```dataview
TABLE WITHOUT ID
  file.link AS "Unstable Cantrips"
FROM "00 Feature Brainstorm/Spell Casting/Spells/Cantrips"
WHERE
  contains(file.etags, "#Unstable")
SORT file.name ASC
```
