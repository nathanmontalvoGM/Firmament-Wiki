## Wild talents powers system.

### Core Idea

- Want a way to for players to customize existing basic feats with powers to make their own spin of a subclass.
- I want to keep the core of what I've built for this system (feats, subclasses and classes should hopefully remained unchanged). s

### Things to Change

- [ ] Complete removal of the source system
- [ ] retain training for feats but add ways to augment them with the new powers system
- [ ] A point based system for powers. Certain powers should be more powerful than others and this cost more points

### Logistics

- How many points should players start with?
- What stats can be affected by powers?
- Do I make feats more general to allow more powers to affect them?
- Powers should utilize the tag system to indicate which powers can be applied where.
    - #Strike powers can go with #Strike feats for example. Similar in concept to the source system but more powers can be applied to a given feat.
- Should points be distributed on a feat by feat basis? Like, this level 2 feat has 10 points that can be spent on it. And a level 4 feat has 15 points etc.
- Classes might need more feat options. Classes could start with two feats instead of 1?
- Some sort of prerequisite system that would all you to access certain powers. Classes would be granted a free prerequisite based on their class. 
- #Universal powers can be used on any class.

#### Levelling up

This would be a major overhaul to the system but could be interesting. Instead of having linear scaling for feats where expertise is gained at certain levels, new abilities could be spent with points earned on level up.

So, maybe the expert version of feat could have a point cost. This point cost would decrease as you levelled up, meaning at earlier levels, you could spend all your points getting the higher version of a given feat, at the cost of not gaining any new powers for others.

You could enhance a power but you can't enhance a flaw. Flaws don't apply to feats and instead are universal aspects of your character.

Flaws would allow you to gain points for picking them, at the cost of a penalty

---
## Unused Points
Unused points from one feat can be carried over and spent on another feat of your choice. These points are added directly to that feat's budget and follow all the same rules as normal. You may only carry points forward to a feat of equal or higher level (you cannot spend unused points from a level 4 feat on a level 2 feat).

Any unused points that aren't spend on feats are wasted.

# Example Powers

- I'll be basing the scaling for these powers on the life domain cleric.
- All powers are assuming a level 2 feat has a 10 point maximum

## Affinity Powers
Instead of spending points on a power for a feat, you may choose an Affinity Power, a power drawn from outside your class's regular power list. Affinity powers are available to all feats your class has access to and don't need to be unlocked again. Each Affinity Power lists a point cost and a minimum ability score bonus required to choose it. 
### Elemental Affinity (+3)
- **Point Cost:** +3
- **Prerequisite:** +1 to constitution 
* Grants access to powers with the #Elemental tag
### Martial Affinity (+3)
* **Point Cost:** +3
- **Prerequisite:** a +1 to Strength or Dexterity 
* Grants access to powers with the #Martial tag
### Arcane Affinity (+3)
* **Point Cost:** +3
- **Prerequisite:** a +1 to Intelligence 
* Grants access to powers with the #Arcane tag
### Divine Affinity (+3)
* **Point Cost:** +3
- **Prerequisite:** +1 to Wisdom
* Grants access to powers with the #Divinity  tag
### Primal Affinity (+3)
* **Point Cost:** +3
- **Prerequisite:** a +1 to Wisdom or Dexterity
* Grants access to powers with the #Primal tag
### Occult Affinity (+3)
* **Point Cost:** +3
- **Prerequisite:** a +1 to Charisma
* Grants access to powers with the #Occult tag
## #Aegis Powers


#### Bulwark (+4)

- **Prerequisite:** None
- **Point Cost:** +4
- **Tag:** #Aegis

When you gain an **Aegis Bonus** from this feat, your protection extends to your allies. One ally within 15 feet gains half that bonus (rounded down, minimum 1) for the same duration.

**Enhance (+4)** One additional ally within range gains this benefit and the range increases by 15 feet.

#### Entrenched (+3)

- **Prerequisite:** None
- **Point Cost:** +3
- **Tag:** #Aegis

You dig in. If you did not move during your turn, increase this feats **Aegis Bonus** by 1 until the start of your next turn. This effect stacks with itself to a maximum of +2, and resets the moment you move.

**Enhance (+3)** Increase the maximum by +1.

#### Interpose (+5)

- **Prerequisite:** #Martial 
- **Point Cost:** +5
- **Tag:** #Aegis

While benefiting from this feats **Aegis Bonus,** you can throw yourself in the way of danger. When a creature you can see attacks an ally within 15 feet, you can choose to become the target of that attack instead, gaining a +2 to AC for the attack.

**Enhance (+5)** Increase the range by 15 feet and the AC bonus by +2.

#### Resolute (+4)

- **Prerequisite:** None
- **Point Cost:** +4
- **Tag:** #Aegis

This feats **Aegis Bonus** also applies to saving throws made with one stat of your choice, chosen when you take this power.

**Enhance (+4)** Choose an additional stat.

#### Riposte (+5)

- **Prerequisite:** #Martial 
- **Point Cost:** +5
- **Tag:** #Aegis

If you successfully negate an attack while benefiting from this feats **Aegis Bonus,** you answer it in kind. Roll 1 **Strike Die** against the attacker, provided they are within your feats range.

**Enhance (+5)** Roll one additional **Strike Die.**

#### Siphon (+4)

- **Point Cost:** +4
- **Tag:** #Aegis

The first time each round you successfully negate an attack while benefiting from this feats **Aegis Bonus,** you draw strength from the blow. You gain 3 [[Temporary Hit Points]].

**Enhance (+3)** Increase the [[Temporary Hit Points]] gained by 3.

#### Unyielding (+6)

- **Point Cost:** +6
- **Tag:** #Aegis

While benefiting from this feats **Aegis Bonus,** the first time per scene you would be reduced to 0 [[Hit Points]], you are instead reduced to 1 and this feats **Aegis Bonus** immediately ends.

**Restriction.** You can only use this power once per scene, you can only take it once, and it cannot be enhanced in any way.


---

## #Strike Powers

#### Deadly (+4)

- **Point Cost:** +4
- **Tag:** #Strike

If you successfully deal [[Critical Hits#Critical Damage|Critical Damage]] with **Strike Dice** with this feat, you deal an additional **Strike Dice.**

**Enhance (+3)** You roll one additional **Strike Dice.**

#### Engulf (+5)

- **Point Cost:** +5
- **Tag:** #Strike

If you successfully deal damage with **Strike Dice** with this feat, you deal 1 **Strike Die** to all creatures within 10 feet.

**Enhance (+3)** You deal an additional **Strike Dice** and the range increases by 10 feet.

#### Fester (+5)

- **Point Cost:** +5
- **Tag:** #Strike

If you successfully deal damage with **Strike Dice** with this feat to a [[01 Condition#Bloodied (WIP)|Bloodied]] creature, the damage leaves them infected. The creature gains vulnerability 5 to the **Strike Dices** damage type for 1 round.

**Enhance (+5)** The vulnerability increases by 5 and duration increases by 1 round.

#### Penetrating (+4)

- **Point Cost:** +4
- **Tag:** #Strike

If you successfully deal damage with **Strike Dice** with this feat, the target gains a -1 penalty to their AC for 1 round.

**Enhance (+2)** increase the AC penalty by -1 and the duration by 1 round.

#### Rapid (+5)

- **Point Cost:** +5
- **Tag:** #Strike

This feat is harder to dodge. Saving throws with physical stats (Strength, Dexterity and Constitution) gain a -2 penalty. Attack rolls gains a +2 bonus.

**Enhance (+5)** Increase the saving throw penalty by -2 and the attack roll bonus by +2.

---

## #Universal Powers

#### Far Sight (+3)

- **Point Cost:** +3
- **Tag:** #Universal

Increase the range of this effect by half its value (minimum of 5 feet). For example, if an effect has a range of 60 feet, you would increase this effects range by 30 feet. This power has no effect on feats with a range of self. If the feta has a range of Touch, or a range of 5 feet, increase the feats range by 10 instead.

**Enhance (+2)** Increases this effects range by an additional half of its value.

#### Fortune (+4)

- **Point Cost:** +4
- **Tag:** #Universal

If this feat affects an ally (healing them, applying a bonus, etc.) the allies next d20 roll gains a +2 bonus.

**Enhance (+4)** increase the d20 roll bonus by +2.

#### Interference (+6)

- **Point Cost:** +6
- **Tag:** #Universal

When you use this feat, you impose [[Favored and Hindered (Advantage System)|Hindered]] on a creature you can see within 30 feet. This has no effect on creatures who already have a stack of [[Favored and Hindered (Advantage System)|Hindered]].

**Restriction.** You can only take this power once and it cannot be enhanced in any way.

#### Misfortune (+4)

- **Point Cost:** +4
- **Tag:** #Universal

If this feat affects an enemy (applies a condition, deals damage etc.) the enemies next d20 roll takes a -2 penalty.

**Enhance (+4)** Increase the d20 roll penalty by 2
#### Persistence (+5)

- **Point Cost:** +5
- **Tag:** #Universal

Extend the duration of this feat. If the feat lists its duration in rounds, increase it by 1 round. If it lists its duration in minutes, increase the duration by 1 minute. This power has no effect on feats with #Instantaneous as their duration.

**Enhance (+5)** Increase the duration further by 1 round or by 1 minute.

---

## #Vitality Powers

#### Cascading Vitality (+4)

- **Point Cost:** +4
- **Tag:** #Vitality

When this feat heals a creature, a portion of that healing spreads to a nearby ally. One ally within 15 feet of the target receives 1 **Vitality Dice.**

**Enhance (+4)** increase the **Vitality Dice** healed by 1 and the range increases by 15 feet.

#### Cleansing (+5)

- **Point Cost:** +5
- **Tag:** #Vitality

When this feat restores [[Hit Points]], the target is also purged of what ails them. End one condition of your choice currently affecting the target.

**Enhance (+5)** End one additional condition on the target or a different target you can see.

#### Defiance (+6)

- **Point Cost:** +6
- **Tag:** #Vitality

You refuse to let anyone fall. You can use this feat as a reaction when a creature you can see within its range would be reduced to 0 [[Hit Points]]. The healing resolves before the damage is applied.

**Restriction.** You can only use this power once per scene, you can only take it once, and it cannot be enhanced in any way.

#### Enduring Grace (+2)

- **Point Cost:** +2
- **Tag:** #Vitality

[[Hit Points]] restored by this feat cannot be reduced, prevented, or ignored by any effect.

**Restriction.** This power cannot be enhanced in any way.

#### Life (+4)

- **Point Cost:** +4
- **Tag:** #Vitality

When you roll **Vitality Dice** with this feat, roll an additional die.

**Enhance (+4)** Roll an additional **Vitality Die**

#### Mending (+4)

- **Point Cost:** +4
- **Tag:** #Vitality

None of your effort is wasted. If this feat would restore more [[Hit Points]] than the target is missing, the excess is granted as [[Temporary Hit Points]] instead. The maximum amount of [[Temporary Hit Points]] a target can regain from this effect is 10.

**Restriction.** This power cannot be enhanced in any way.

#### Reciprocal (+3)

- **Point Cost:** +3
- **Tag:** #Vitality

The care you give returns to you. When this feat restores [[Hit Points]] to a creature other than yourself, you regain 2 [[Hit Points]].

**Enhance (+3)** Increase the [[Hit Points]] you regain by 2.

#### Renewing (+5)

- **Point Cost:** +5
- **Tag:** #Vitality

When this feat affects a creature, the healing lingers. The target regains 1d4 [[Lesser Healing]] at the start of each of their turns 1 minute. This effect does not stack.

**Enhance (+5)** Increase the [[Lesser Healing]] regained by 1d4.

#### Swift Recovery (+5)

- **Point Cost:** +5
- **Tag:** #Vitality

Your healing gets people back on their feet. When this feat restores [[Hit Points]] to a creature, that creatures next action that costs 2 action or more, has its cost reduced by 1. 

**Restriction.** This power cannot be enhanced in any way.

#### Triage (+5)

- **Point Cost:** +5
- **Tag:** #Vitality

You focus your efforts where they are needed most. When you roll **Vitality Dice** with this feat to heal a [[01 Condition#Bloodied (WIP)|Bloodied]] creature, roll 2 additional **Vitality Dice.**

**Enhance (+5)** Roll one additional **Vitality Dice.**

#### Warding Grace (+4)

- **Point Cost:** +4
- **Tag:** #Vitality

Your healing leaves a lasting guard. When this feat restores [[Hit Points]] to a creature, that creature gains a +1 bonus to AC until the start of your next turn.

**Enhance (+4)** Increase the AC bonus by +1.

## #Divine Powers
#### Sacred Strike (+3)

- **Point Cost:** +3
- **Prerequisite:** #Divinity
- **Tag:** #Strike

If you successfully deal damage with **Strike Dice** with this feat, the damage type becomes radiant. The target then gains weakness 3 to radiant damage.

**Enhance (+3):** The weakness to radiant damage increases by 3.

#### Resist Fear (+3)

- **Point Cost:** +3
- **Prerequisite:** #Divinity
- **Tag:** #Aegis

While benefiting from this feat's Aegis Bonus, the target gains a bonus to saving throws against the [[01 Condition#Frightened|Frightened]] and [[01 Condition#Stunned|Stunned]] conditions equal to the **Aegis Bonus** granted.

**Enhance (+3):** The bonus increases by +2 in addition to your **Aegis Bonus.

#### Mending (+3)

- **Point Cost:** +3
- **Prerequisite:** #Divinity
- **Tag:** #Vitality

When this feat rolls **Vitality Dice** to heal a creature, the target also removes 1 persistent damage of any type currently affecting them.

**Enhance (+3):** Remove 1 additional persistent damage type.

#### Conduit (+5)

- **Point Cost:** +5
- **Prerequisite:** #Divinity
- **Tag:** #Vitality

When this feat rolls **Vitality Dice** to heal a creature, that creature's next attack before the start of your next turn deals 1 **Strike Die** of radiant damage on a hit.

**Enhance (+5):** The Strike Die increases by 1.

#### Smiting Blow (+4)

- **Point Cost:** +4
- **Prerequisite:** #Divinity
- **Tag:** #Strike

If you successfully deal damage with **Strike Dice** with this feat, the target must make a Wisdom saving throw against your Spell Save DC or be [[01 Condition#Frightened|Frightened]] until the end of their next turn.

**Enhance (+4):** The duration increases by 1 round and the target takes a -2 penalty to the save.

#### Overflowing Radiance (+3)

- **Point Cost:** +3
- **Prerequisite:** #Divinity
- **Tag:** #Vitality

When this feat restores Hit Points, excess healing beyond the target's maximum is converted to radiant damage dealt to one enemy within 15 feet rather than being lost.

**Restriction:** This power cannot be enhanced in any way.

#### Inspire the Faithful (+4)
- **Point Cost:** +4
- **Prerequisite:** #Divinity
- **Tag:** #Vitality
- 
When this feat restores Hit Points to a creature that is [[Bloodied]], the target gains [[Favored and Hindered (Advantage System)|Favored]] on their next d20 roll.

## Variable Powers

These powers can be applied to a feat carrying any of the three core tags, and change their effect based on which tag is matched.

#### Acidic (+3), Variable

- **Prerequisite:** #Elemental 
- **Point Cost:** +3
- **Tag:** #Strike #Aegis #Vitality

**Variable:** This power includes several variants depending on what tag the feat it's applied to uses. If a feat would have multiple matching tags, choose one to gain the benefits of this power.

#Strike 
If you successfully deal damage with **Strike Dice** with this feat, you deal 1 persistent acid damage to the target. While they are afflicted by this acid damage, their AC is reduced by 1.

**Enhance (+3)** increase the acid damage by 1 and the AC penalty by 1.

#Aegis 
When this feat grants an **Aegis Bonus** to a creature, the protected creature becomes laced with corrosive residue. The next creature to hit the protected target takes persistent acid damage equal to the **Aegis Bonus** provided. While afflicted by this acid damage their attack rolls take a −1 penalty.

**Enhance (+3):** Increase the persistent acid damage by 1 and the attack roll penalty by 1.

#Vitality 
When this feat restores rolls **Vitality Dice**, the healing is laced with a corrosive agent that burns away infection, poison, and disease. The targets next attempt on saving throw against a poison or disease gains a +2 bonus.

**Enhance (+3):** increase this bonus by +2.
#### Burning (+3), Variable

- **Prerequisite:** #Elemental 
- **Point Cost:** +3
- **Tag:** #Strike #Aegis #Vitality

**Variable:** This power includes several variants depending on what tag the feat it's applied to uses. If a feat would have multiple matching tags, choose one to gain the benefits of this power.

#Strike If you successfully deal damage with **Strike Dice** with this feat, you deal persistent 1d6 fire damage.

**Enhance (+3)** The persistent fire damage increases by 1d6.

#Aegis If you successfully negate an attack while benefiting from this feats **Aegis Bonus,** you add 1d4 fire damage to your next **Strike Dice.**

**Enhance (+3)** The fire damage increases by 1d4.

#Vitality When you restore [[Hit Points]] with this feat, you enflame the target. The targets next attack roll gains a +1 bonus.

**Enhance (+3)** Increase this bonus by +1

#### Electrocuting (+3), Variable

- **Prerequisite:** #Elemental 
- **Point Cost:** +3
- **Tag:** #Strike #Aegis #Vitality

**Variable:** This power includes several variants depending on what tag the feat it's applied to uses. If a feat would have multiple matching tags, choose one to gain the benefits of this power.

#Strike If you successfully deal damage with **Strike Dice** with this feat, this damage chains to an adjacent target. One creature within 10 feet takes 1d6 electricity damage.

**Enhance (+3)** Increase the range by 10 feet and the damage by 1d6.

#Aegis If you take damage from a source you can see while benefiting from this feats **Aegis Bonus,** the damage dealer takes 1d6 electricity damage.

**Enhance (+3)** Increase the electricity damage by 1d6.

#Vitality When you restore [[Hit Points]] with this feat, you Invigorate the target. The target gains a 5 foot bonus to movement speed for 1 round.

**Enhance (+3)** The movement speed bonus increases by 5 feet and the duration increases by 1 round.

#### Frigid (+3), Variable

- **Prerequisite:** #Elemental 
- **Point Cost:** +3
- **Tag:** #Strike #Aegis #Vitality

**Variable:** This power includes several variants depending on what tag the feat it's applied to uses. If a feat would have multiple matching tags, choose one to gain the benefits of this power.

#Strike If you successfully deal damage with **Strike Dice** with this feat, the target takes 1 persistent cold damage. While they take persistent damage in this way, they gain a -5 movement speed penalty. This cannot reduce their movement speed below 5.

**Enhance (+3)** increase the damage by 1 and the movement speed penalty by 5.

#Aegis When you use this feat, you can choose to increase your defenses at the cost of your movement speed. You gain a -10 penalty to movement speed. In exchange, you gain a +2 bonus to AC.

**Enhance (+3)** increase the penalty by 5 feet but increases the AC bonus by +1.

#Vitality When this feat affects a creature, the cold wards them from incoming threats. The target gains 4 [[Temporary Hit Points]].

**Enhance (+3)** The target regains an additional 4 [[Temporary Hit Points]].

#### Limitless (+6), Variable

- **Point Cost:** +6
- **Tag:** #Strike #Aegis #Vitality 
**Variable:** This power includes several variants depending on what tag the feat it's applied to uses. If a feat would have multiple matching tags, choose one to gain the benefits of this power.

When you use this feat, you sacrifice your skill and training for powerful boons. You are [[Favored and Hindered (Advantage System)|Hindered]] on all rolls with your classes Key Ability until you use this powers effects. Depending on this feats tag, you gain different benefits.

**Restriction.** You can only take this power once and it cannot be enhanced in any way.

#Strike You roll 2 additional **Strike Dice** and you increase all **Strike Dice** by 1 step. Once you deal damage in this way, you lose [[Favored and Hindered (Advantage System)|Hindered]] on your classes key ability.

#Aegis You gain resistance 10 to the next instance of damage you receive. Once you reduce damage in this way, you lose [[Favored and Hindered (Advantage System)|Hindered]] on your classes key ability.

#Vitality You roll 2 additional **Vitality Dice** and you increase all **Vitality Dice** by 1 step. Once you roll **Vitality Dice** in this way, you lose [[Favored and Hindered (Advantage System)|Hindered]] on your classes key ability.

---

# Flaws
You can willing choose a flaw to apply to a feat of your choice to gain points to spend on that feat. The flaw must match a tag the feat has. You can have no more than 2 flaws per feat.
## #Aegis Flaws
#### Shoddy Protection (-4)
- **Point Cost:** -4
- **Tag:** #Aegis 

If you take damage while benefiting from an **Aegis Bonus** from this feat, you take an additional [[Weapon Dice]] or **Strike Dice** of damage. 

#### Exposed Flanks (-5)

- **Point Cost:** −5
- **Tag:** #Aegis

While the Aegis Bonus from this feat is active, the [[Flanking]] bonus for enemy creatures increase by +2. 
#### Fading Defense (-4)

- **Point Cost:** −4
- **Tag:** #Aegis

The Aegis Bonus granted by this feat decreases by 1 at the start of each of the target's turns until it reaches 0 and ends. It cannot be refreshed by reapplying this feat to the same target within the same scene.

#### Delayed Protection (-4)

- **Point Cost:** −4
- **Tag:** #Aegis

The **Aegis Bonus** from this feat does not take effect until the start of the target's next turn.

#### Weighty Ward (-5)

- **Point Cost:** −5
- **Tag:** #Aegis

While the **Aegis Bonus** from this feat is active the target's movement speed is reduced by 10 feet.


## #Strike Flaws

#### Sapped Strength (-4)

- **Point Cost:** -4
- **Tag:** #Strike

When you roll **Strike Dice** with this feat, reduce its die value by 1 (minimum of a d4).

#### Telegraphed (-3)
- **Point Cost:** −4
- **Tag:** #Strike

The target is never [[Off-Guard]] against this feat's attacks. 

#### Exhausting Blows (-4)

- **Point Cost:** −4
- **Tag:** #Strike

After dealing damage with this feat you are [[Favored and Hindered (Advantage System)|Hindered]] on your next attack roll.

#### Inconsistent Strikes (-7)

- **Point Cost:** −6
- **Tag:** #Strike
- 
When you deal damage with **Strike Dice** dice, if the result is lower than half the dies value, it is ignored (for example, on a d8, results of 4 or lower are ignored).

#### Clumsy Attacks (-4)

- **Point Cost:** −4
- **Tag:** #Strike

When you use this feat, you are [[Off-Guard]] until the start of your next turn.

#### Diminishing Returns (-6)

- **Point Cost:** −6
- **Tag:** #Strike

Each time you use this feat against the same target during this scene, reduce the die step of its **Strike Dice** rolled by 1 (minimum of 1d4). If the feat already deals 1d4 **Strike Damage,** then the damage is instead further reduced to 1 damage.  

## #Universal Flaws

#### Exhaustive (-5)

- **Point Cost:** -5
- **Tag:** #Universal

You can only use this feat once per scene. Subsequent uses apply one level of [[01 Condition#Exhausted x|Exhaustion]].

#### Fragile (-6)

- **Point Cost:** -6
- **Tag:** #Universal

While [[01 Condition#Bloodied (WIP)|Bloodied]], you cannot use this feat.

#### Horrifying (-2)

- **Point Cost:** -2
- **Tag:** #Universal

If a creature has seen you use this feat, they are appalled and disgusted. You are [[Favored and Hindered (Advantage System)|Hindered]] on all Charisma rolls to interact with them and they are less likely to want to be around you. You eventually lose this penalty with a character who becomes accustomed to you. How long this takes is up to the GM.

#### Backlash(-4)

- **Point Cost:** -4
- **Tag:** #Universal

Your abilities are so powerful, they hurt you. When you use this feat, you take 1d4 force damage that cannot be ignored or reduced in any way. This effect can not reduce you below 1 [[Hit Point]].

#### Mental Strain (-3)

- **Point Cost:** -3
- **Tag:** #Universal

When you use this feat, you suffer a -2 penalty to a mental stat of your choice for the next hour. You can take this flaw multiple times, but must pick a new mental stat each time.

#### Physical Strain (-3)

- **Point Cost:** -3
- **Tag:** #Universal

When you use this feat, you suffer a -2 penalty to a physical stat of your choice for the next hour. You can take this flaw multiple times, but must pick a new physical stat each time.

#### Slow (-3)

- **Point Cost:** -3
- **Tag:** #Universal

When you use this feat, reduce your movement speed by 5 feet for 1 minute. Multiple uses stack with the previous, but does not refresh the duration. Once your movement speed has been reduced to 5 feet, you can no longer use this feat until the penalty wears off.

#### Uncontrollable (-8)

- **Point Cost:** -8
- **Tag:** #Universal

When you would select a target(s) for this feat, you make a DC 11 flat check. On a failure, the feat randomly affects a target (including yourself).


## #Vitality Flaws

#### Overabundant Vitality (-3)

- **Point Cost:** -3
- **Tag:** #Vitality

You are sometimes a bit overzealous with your healing efforts. If you roll the maximum value on **Vitality Dice** with this feat, you deal force damage equal to half the value rolled to the target instead of healing them. This damage cannot be reduced or ignored in any way.

#### Sapped Vitality (-4)

- **Point Cost:** -4
- **Tag:** #Vitality

When you roll **Vitality Dice** with this feat, reduce its die value by 1 (minimum of a d4).

#### Healing Resilient (-4)
- **Point Cost:**
- **Tag:** #Vitality 

When you use this feat, you gain a -5 penalty to all healing received for the next minute. 

## #Divinity Flaws
#### Heretical (-6). Variable
- **Prerequisite:** #Divinity 
- **Point Cost:** -5
- **Tag:** #Strike #Vitality #Aegis 
**Variable:** This power includes several variants depending on what tag the feat it's applied to uses. If a feat would have multiple matching tags, choose one to gain the benefits of this power.

Using this feat breaks a fundamental tenet of your deity and you are punished for it. 

#Strike 
When you deal **Strike Damage** with this feat, half the damage rolled is dealt back to you as force damage. This damage cannot be ignored or reduced in any way. 

#Vitality 
When you roll **Vitality Dice** with this feat, a random enemy creature within 120 feet is healed half the amount.

#Aegis 
When you grant an **Aegis Bonus** with this feat, a random enemy creature within 120 feet also receives the bonus.
### Unused

#### Simple Powers

You can spend points here to enhance a feats base effects. There is no limit to how many times you can enhance a feat in this way.

The bonuses from these powers only apply for as long as the feats durations list.

##### Strike Power (+2)

- +2 to **Strike Dice**

##### Aegis Power (+2)

- +1 to AC

##### Vitality Power (+2)

- +3 to **Vitality Dice** rolls