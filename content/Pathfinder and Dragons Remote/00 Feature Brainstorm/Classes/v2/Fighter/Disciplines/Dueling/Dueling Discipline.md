## NOTE:
* Each discipline should have existing features you unlock WITH THE MAIN DIFERENCE BEEING THE MENUEVERS YOU SELECT.
* Currently class is very reaction heavy, maybe give them two reactions
## Feats Per Level
```dataview
TABLE WITHOUT ID
  file.link AS "Level 2 Feats"
FROM "00 Feature Brainstorm/Classes/v1/Fighter/Disciplines/Dueling"
WHERE
  contains(file.etags, "#FighterFeat") AND
  contains(file.etags, "#Level2Feat")
SORT file.name ASC
```
```dataview
TABLE WITHOUT ID
  file.link AS "Level 4 Feats"
FROM "00 Feature Brainstorm/Classes/v1/Fighter/Disciplines/Dueling"
WHERE
  contains(file.etags, "#FighterFeat") AND
  contains(file.etags, "#Level4Feat")
SORT file.name ASC
```
```dataview
TABLE WITHOUT ID
  file.link AS "Level 6 Feats"
FROM "00 Feature Brainstorm/Classes/v1/Fighter/Disciplines/Dueling"
WHERE
  contains(file.etags, "#FighterFeat") AND
  contains(file.etags, "#Level6Feat")
SORT file.name ASC
```
```dataview
TABLE WITHOUT ID
  file.link AS "Level 8 Feats"
FROM "00 Feature Brainstorm/Classes/v1/Fighter/Disciplines/Dueling"
WHERE
  contains(file.etags, "#FighterFeat") AND
  contains(file.etags, "#Level8Feat")
SORT file.name ASC
```
```dataview
TABLE WITHOUT ID
  file.link AS "Level 10 Feats"
FROM "00 Feature Brainstorm/Classes/v1/Fighter/Disciplines/Dueling"
WHERE
  contains(file.etags, "#FighterFeat") AND
  contains(file.etags, "#Level10Feat")
SORT file.name ASC
```
## Intro
You specialize in one-on-one combat, wielding one-handed weapons. When you select this discipline at level 1, you gain the Duel Target feature.
## Weapon Specialization 
Weapons that are one handed or versatile while wielding no weapons in your second hand. If you select a versatile weapon, it must be wielded one-handed To gain your Discipline's features.

## Duel Target
At 1st Level, Flavor text.

**Cost:**  1 action

You designate one creature you can see and that is within melee range as your duel target. Once your duel target is designated, you must attack the target at least once per turn to keep them as your target. If you fail to do this, they are no longer your duel target. If your duel target dies, you can select a new target as a free action. While the creature is designated as your duel target, you gain additional effects as long as you are fighting with a one-handed weapon and no other weapons.

While engaged with your Duel Target:
- You can use [[Opportunity Attack]]s to trigger 1 action feats with the #Maneuver tag.
- Melee attacks against your duel target gain a +2 bonus to damage rolls.

### Note
Might be to many things

## Studied Opponent
At 4th level, the longer you engage with your Duel Target, the better you become at fighting them. You gain more options in this feat at higher levels. 

### 4th Level - Relentless Tempo 
#### v1
If the same creature has been your Duel Target for 2 consecutive rounds, you gain a +2 bonus melee attack rolls against them. 

#### v2
If the same creature has been your Duel Target for 2 consecutive rounds, you gain two reactions against them
##### note
could be annoying to keep track off. 

### 7th Level - Breaking Rhythm
If the same creature has been your Duel Target for 3 consecutive rounds, the first time each round they miss you with an attack, you may immediately make an [[Opportunity Attack]] against them.

### 10th Level - Punishing Precision
If the same creature has been your Duel Target for 4 consecutive rounds, the first melee attack you hit against them each round improves its degree of success by one step.

## Honorable Engagement
At 6th Level, when you designate a creature as your dueling target, you can choose to make the fight an honorable engagement. While the creature is your Duel Target in this way, you and the creature treat attacks on other creatures as [[Favored and Hindered (Advantage System)|Hindered]] 

## Prolonged Duel
Als at 6th Level, you've learned to engage your Duel Target for longer periods of time. You can go 1 round without attacking your Duel target before losing them as your Duel target. 

## Finding the Opening
At 9th level, prolonged combat against a single foe reveals cracks in their defense. When your Duel Target becomes [[01 Condition#Bloodied (WIP)|Bloodied]], your attacks ignore resistance up to an amount equal to your level. If the creature would be immune to your attacks, it instead has resistance.
## Internal
* unlocks more maneuvers has the class levels up
* additional class features allow you to be better at the target you are fighting
	* 2 rounds of fighting means you gain a +2 attack bonus against the target
### feats
Each level should give:
* Damage options
* Defensive option
* utility option

Currently level 2 does not do this