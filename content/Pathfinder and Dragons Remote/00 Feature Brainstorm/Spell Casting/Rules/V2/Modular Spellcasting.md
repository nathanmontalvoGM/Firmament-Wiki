
# Spell System

## Building Spells

Spells are split between two core features: its fundamental and its source. The spells **Fundamental** defines its core effect while its source is a modifier or additional effect you select when casting the spell. Different classes have access to different spell sources, similar to how classes have different spell lists.

## Casting & Mana

All spells function as cantrips locked behind level requirements. There are no spell slots. Instead, you spend **Mana** to empower a spell beyond its base effect. 

**Empower:** Each spell lists an Empower keyword describing what improves when Mana is spent. Some spells list **Empower (X)**, indicating empowering costs X Mana rather than 1.

## Sources

Sources are a modular list applied to spells at the time of casting. Each source has a **spell level prerequisite** — a source with a spell level 2 prerequisite can only be applied to a spell of level 2 or lower. Sources scale automatically with the spell level they are applied to. Cantrip sources are an exception, scaling with the Cantrip itself rather than a spell level.

Sources cannot be empowered with Mana — their effect is fixed at their spell level.

When a source is applied to an area of effect spell and references a target, it applies to **one target** within the area unless stated otherwise. Sources specify separate effects for allies and enemies where relevant.

> **Open design question:** A mechanic to incentivize using varied sources rather than repeating the same one is still needed.

## Delivery

Each spell uses a delivery method determining how it reaches its target. Deliveries have a base Mana cost and can be upgraded by spending additional Mana.

|Delivery|Base Cost|Upgrade Cost|
|---|---|---|
|Aura|2|+1 per 5 ft. increase|
|Cone|2|+2 per 5 ft. increase|
|Cube|1|+1 per additional 5 ft. cube|
|Imbue|0|+2 per additional target|
|Glyph|2|—|
|Line|2|+1 per 10 ft. of extra length|
|Remote|0|+1 per additional target|
|Sphere|2|+1 per +5 ft. to radius|
|Touch|0|—|
**Aura:** 10 foot radius cantered on you, affecting all targets within
**Cone:** 15 foot area in front of you
**Cube:** 5 foot area you can see
**Glyph:** Creates a 5 foot square glyph on the ground in an area you can see That doesn’t already have a glyph within 5 feet. You can use an action on a subsequent turn to cause the spell to appear on the glyph when you choose. Afterwards, the glyph disappears.
**Imbue:** Targets a weapon wielded by a creature within 60 feet. If the weapon hits a creature while imbued, you can spend a reaction and 1 mana to to cast the spell with a range of Touch against the target.
**Line:** 5-foot-wide, 30-foot-long, 10-foot-high area. Expanding the area’s height by 5 feet and length by 10 feet is double the mana cost.
**Remote:** A target you can see within 30 feet.
Ranged spells targeting a creature within 5 feet are **Hindered**.
**Sphere:** 5 foot radius sphere you can see. 
**Touch:** A target within 5 feet, or yourself. Touch grants [[Favored and Hindered (Advantage System)|Favored]] on spell attack rolls and [[Favored and Hindered (Advantage System)|Hindered]] on saving throws.

## Spell Format

```
Tradition:
Casting Time:
Delivery:
Components:
Casting Requirements:
Duration:
```

### Empowering
ways a spell can be empowered
**Empower:** increase damage by 1d6
**Empower (2):** Increase the DC of the saving throw by 2 per Mana spent.
**Empower (2):** Increase the duration of the saving throw by 1 round per Mana spent

# Spellcasting
* ranged spells attacking a target within 5 feet are  [[Favored and Hindered (Advantage System)|Hindered]] Sources
A source must match in level with the spell you are casting with. So if you are casting a third level spell and using greater rejuvenation, that greater rejuvenation must be used at its third level power. 

Sources automatically scale depending on which spell level you have access to. The exception for this is Cantrips where it scales with the Cantrip instead.

Need to incentive players to use multiple sources instead of just the same one over and over without having annoying book keeping of tracking how many times a source was used. 

## Area of affects
if a source is used with an area of effect and it lists a target in its description, that source applies to one target within the spells area unless otherwise stated.  

## allies and enemies 
Sources should specify different effects on allies on and enemies when necessary 
## Divine


### NOTE
Needs flavor text
### Cantrips
Scaling for Cantrips should be minor bonus and effects.

Cantrip sources will be locked behind character level
#### Character Level 1+
##### Lesser Extended Spell
You increase the range of a Cantrip. If the Cantrip has a range of touch, it gains a range of 30 feet. If the Cantrip normally has a range, the range increases by 30 feet.

**At Higher Levels:** the range for both Touch and ranged cantrips increases by 30 feet.

##### Lesser Protection 
**Target:**  Creature who is the target of the Cantrip. 
**Allies:** Grant a +1 to AC and all saving throws for 1 round to the target of this Cantrip.

**At Higher Levels:** Increase the AC and Saving Throw bonus by 1

##### Lesser Blessed Weapon
**Target:**  Creature who is the target of the Cantrip. 
Select a weapon the target is holding or has equipped. That weapon becomes magical and gains a +2 bonus to attack rolls made with that weapon until the end of their next turn.

**At Higher Levels:**  the attack bonus increases by +2.

##### Lesser Cursed Weapon
**Target:**  Creature who is the target of the Cantrip. 
Select a weapon the target is holding or has equipped. The target must make a wisdom saving throw. On a failure, the weapon becomes cursed. While cursed, the target suffers a -2 penalty to attack rolls made with that weapon Until the end of their next turn..

**At Higher Levels:** The attack penalty increases by -2.

#### Character Level 5+
##### Quickened
**Target:**  Creature who is the target of the Cantrip. 
**Duration:** 1 Minute
The target gains a +10 bonus to movement speed for the duration.

**At Higher Levels:** You can target one additional creature within 30 feet and the movement speed bonus increases by 10 feet.

##### Empower
**Target:** One Creature who is the target of the Cantrip. 
**Duration:** 1 Round
Choose an ability. The target gains [[F[[Favored and Hindered (Advantage System)|Favored]]eir next d20 roll with that ability for the duration. 

**At Higher Levels:**[[Favored and Hindered (Advantage System)|Favored]]
NOTE: Might make flat bonus instead. 

##### Divine Imbuement

**Target:** Target of the Cantrip
**Duration:** 1 Minute
When casting a cantrip with this source, change the listed damage to radiant. When you roll damage, the target must make a Dexterity saving throw. On a failure they are covered in divine light and can’t benefit from being [[01 Condition#Invisible|Invisible]] or [[01 Condition#Hidden|Hidden]]. The target can repeat this save at the end of each of their turns. 
#### Character Level 11+

### Spell Level 1+
#### Major Rejuvenation 
**Target:** 1 creature you can see within range
Heal 1d6 [[Greater and Lesser Healing|Greater Healing]] to either the target of the spell, or a target within 15 feet.

**At Higher Levels:** Increases the healing by 1d6 and the range by 5 feet. 

#Vitality 
#### Minor Rejuvenation 
**Target:** 1 creature you can see within range
Heal 1d8 [[Greater and Lesser Healing|Lesser Healing]] to either the target of the spell, or a target within 30 feet.

**At Higher Levels:** Increases the healing by 1d8 and the range by 5 feet.

#Vitality 

#### Divine Wrath 
**Target:** All creatures within range
**Area:** 10 foot burst
On a successful hit or failed save, all creatures within 10 feet of the target of must make a [[Basic Saving Throw|Basic Dexterity Saving Throw]] vs your [[spell save DC]]. On a failure, they take 1d4 radiant damage 

**At Higher Levels:** The damage increases by 1d4. 

#Strike 
#### Celestial Aid
**Target:** 1 creature targeted by the spell
Divine spirits protect the target from harm. Any creature that attacks the target of this spell until the start of your next turn takes 1d6 radiant damage. 

**At Higher Levels:** The damage increases by 1d6. 

#Strike 
#### Protection
**Target:** 1 creature you can see
**Allies:** Grant a +1 to AC and all saving throws for 1 minute to the target of this spell.

**At Higher Levels:** Increase the AC and Saving Throw bonus by 1

#Aegis 
#### Blessed Weapon
**Target:** 1 creature you can see
Select a weapon the target is holding or has equipped. That weapon becomes magical and gains a +2 bonus to attack rolls and their [[Weapon Dice]] increased by 1 on their next attack.

**At Higher Levels:** (5th) the attack bonus is +4 and the [[Weapon Dice]] increased by +1. (9th) The attack bonus is +8 and the [[Weapon Dice]] increased by +1. 

#Strike 
#### cursed weapon 
**Target:** 1 creature targeted by your spell
On a successful hit or failed save, select a weapon the target is holding or has equipped. The target must make a wisdom saving throw. On a failure, the weapon becomes cursed. While cursed, suffers a -2 penalty to attack rolls with that weapon and that weapons [[Weapon Dice]] is decreased by 1 until the end of their next turn..

**At Higher Levels:** (5th) the attack penalty is -4. (9th) The attack penalty is -8 and the [[Weapon Dice]] is decreased by an additional die.


#### Invigorate 
**Target:** 1 creature you can see
The target regains 4 [[Temporary Hit Points]]. Unlike normal [[Temporary Hit Points]], this effect can only be used on [[01 Condition#Bloodied (WIP)|Bloodied]] creatures. 

**At Higher Levels:** increase the amount of [[Temporary Hit Points]] by 3

#### Divine Resistance 
**Target:** 1 creature you can see
**Duration:** 1 Round
The target gains resistance 4 to radiant damage and half the amount to the next source of damage it takes. 

**At Higher Levels:** The radiant resistance increases by 2 and the duration increases by 1 round. 

#### Divine Weakness 
**Target:** 1 creature targeted by your spell
**Duration:** 1 Round
On a successful hit or failed save, the target gains Weakness 4 to radiant damage and half the amount to the next source of damage it takes. 

**At Higher Levels:** The radiant Weakness increases by 2 and the duration increases by 1 round. 

#### Extended Spell

You increase the range of a Spell. If the Spell has a range of touch, it gains a range of 20 feet. If the Spell normally has a range, the range increases by 20 feet.

**At Higher Levels:** the range for both Touch and ranged Spells increases by 10 feet.

### Spell Level 2+
need more damaging or offensive options

#### Cleansing Fire
**Target:** One Creature that has the [[01 Condition#Bloodied (WIP)|Bloodied]] condition.
**Duration:** 1 Round
Divine radiance sears the wounds of your allies. The target of this spell can choose to take 1 fire damage. If they do, they are not considered [[01 Condition#Bloodied (WIP)|Bloodied]] until the start of your next turn. 

**At Higher Levels:** increase the duration of this effect by 1 round.

#### Rotting Blight
**Target:** One Creature 
Target must make a Constitution saving throw or take 1d8 necrotic damage on a failure and their next d20 roll is [[Favo[[Favored and Hindered (Advantage System)|Hindered]]gher Levels:** The damage increases by 1d8. 

#### Greater Expansion
Increase the amount of creatures a spell can target by one. The new targets must still be within the spells casting range. Doing so increases the action cost of the spell by one. 

**At Higher Levels:** increase the targets by 1 for every 2 levels after the 3rd.

#### Bolster
**Target:** One Ally you can see
**Duration:** 1 Round
The target gains [[Favored[[Favored and Hindered (Advantage System)|Favored]]xt attack roll.

**At Higher Levels:** (5th) The target gains [[Favored an[[Favored and Hindered (Advantage System)|Favored]]l. (7th) All the targets d20 rolls during their turn gain  [[Favored and H[[Favored and Hindered (Advantage System)|Favored][[Favored and Hindered (Advantage System)|Favored]]
**Prerequisite:** your spell has range higher than touch.
You focus the spells energy into one powerful attack. The spell gains a range of touch instead of its listed range. If it would normally target m[[Favored and Hindered (Advantage System)|Favored]] a successful hit or failed save, when you roll damage for the spell, increase the [[[[Weapon Dice]]]] by 1 (maximum of a d12). And you reroll 1s and 2s. You must use the new result. 

**At Higher Levels:[[Favored and Hindered (Advantage System)|Favored]] within 5 feet of a creature, the spells attack roll or saving throw isn't [[Favored and Hind[[Favored and Hindered (Advantage System)|Hindered]]#### Empathetic healing 
**Prerequisite:** The target of your [[Greater and Lesser Healing|Greater Healing]] or [[Greater and Lesser Healing|Lesser Healing]] has The [[01 Condition#Bloodied (WIP)|Bloodied]] condition. 
You cause your next instance of [[Greater and Lesser Healing|Greater Healing]] or [[Greater and Lesser Healing|Lesser Healing]] this turn to roll at its maximum value. However, any conditions applied to the creature apply to you and any missing health you restore, is dealt as void damage to you halved. (Rounded down). This damage ignores any resistances or immunities. 

**At Higher Levels:** Gain a +4 bonus to the healing rolled.

#### Hastened 
**Target:** One target of the spell.
**Duration:** 1 Minute
The target gains an extra action which can only be used to Attack or Move. 

**At Higher Levels:** You can target one additional creature within 30 feet..

#### Holy Ground
**Target:** One target of the spell and up to two other creatures
**Duration:** 1 Minute
You bless the ground around your enemies. The ground beneath one target of your Spell becomes holy ground. The holy ground extends in a 20 foot area centered on the target. That target and two other creatures you can see are considered anathema to your deity, becoming negatively affected by holy ground. The holy ground is considered [[Impeded Movement]] for these creatures. They also take 1d6 t radiant damage if they enter or start their turn standing on the holy ground. They can also make this saving throw to end the persistent damage if they are not standing on the holy ground. 

**At Higher Levels:** The range of the Holy Ground increases by 5 feet and the damage increases by 1d6.
#### Split Focus
**Target:** One target of the spell and an additional target within 30 feet.
**Prerequisite:** The spell targets one creature.
You divert the potency of your spell between two targets. If the spell requires an attack roll, make a separate attack roll against each target (incurring [[[Multiple Attack Penalty]] as normal). If it requires a saving throw, both targets must attempt the saving throw. 

**At Higher Levels:**
Note: bad wording
#### Selective Energy
When you cast a spell that has an area of effect, you can select up to 5 creature to not be affected by the spell.

**At Higher Levels:**

#### Remediate 
**Target:** One target of the spell
You can attempt a saving throw on a condition afflicting a creature. You use your Wisdom modifier for this save, even if the save would normally require a different ability score. 
### Spell Level 4+ 
#### Drain Life
**Target:** One creature targeted by your spell
The target is [[01 Condition#Drained (Con)|Drained]] 

#### Emblazing Light
**Target:** Area of 30 feet centered on the spells target.

You choose one target from your spell. A beacon of bright holy light surrounds the target. The beacon sheds bright light in a 30-foot-radius centered on the target until the beginning of your next turn. All creatures in the area must succeed at a Wisdom save equal to your spell DC or become [[01 Condition#Dazzled|Dazzled]] for 1 round.

#### Favor Weapon
**Target:** a creature wielding weapon you can see 
**Duration:** 
You channel this spell into the hands of an ally. Instead of casting this spell, the spell is imbued on a wielded weapon you can see. The spell slot is still expended this turn but the spell doesn't take effect until the wielders turn. If the target hits a creature before the start of your next turn, you add your spells damage and other effects to that attack. If the spell requires a saving throw, the spell uses your Spell save DC or the targets Class DC or Spell DC (whichever is higher). If the spell deals damage, the weapons damage dice inherit the same damage type instead of its listed damage type. Both the weapon and spell deal an additional die of damage when cast in this way. If the creature does not successfully land an attack with the imbued weapon before the start of your next turn, then the spell is wasted

**At Higher Levels:**

##### Note:
might remove with new system

#### Surging Life
**Target:** One creature you can see within 30 feet
For every 5 [[Hit Points]] you restore to a creature other than yourself this turn, you gain a +1 bonus to attack rolls and a +2 to damage rolls for your spells and cantrips until the end of your next turn. 

**At Higher Levels:** 

#### Relay Spell
**Target:** One creature you can see
You select a willing creature to be a conduit for your magic. You can cast a spell from another ally you can see as if they were casting the spell, using your spell save DC and spell attack modifier. You use this ally for determining line of sight as well as the spells range. The ally then uses their reaction to cast the spell. While casted in this way, the ally may expend any 1 action feature to be used as part of this spell attack.

#### Magical Resilience
**Target:** One creature targeted by your spell
**Duration:** 1 Round
Your target gains [[Favored and Hindran[[Favored and Hindered (Advantage System)|Favored]]inst magical effects and spell attack rolls against them are [[Favored and Hindered [[Favored and Hindered (Advantage System)|Hindered]]Ordained Expediency 
**Target:** 1 creature targeted by the spell
Choose a feature of your spells target with a minimum action cost of 1 action. Reduce the action cost of this ability by one (minimum of 0) until the end of your targets next turn. When the feature is used in this way, regardless of the action cost of the ability, you limit its uses during their turn to 1. 
#### Cease Dying
**Target:** 1 creature you can see
Choose a creature that is either the target of your spell or a creature within 30 feet of your spells target. If this creature is at 0 [[Hit Points]], you rest[[Favored and Hindered (Advantage System)|Favored]]their death clock. They are also immune to the [[01 Condition#Bloodied (WIP)|Bloodied]] condition until the end of their next turn. 
#### Great Magnification
Your spell gains an area of effect of 10 feet. This is a burst centered on the spells target. If the spell has multiple targets, choose one of the spells targets to gain this effect. If the spell already has an area of effect, increase its size by 10 feet. If the spell would deal damage or apply negative [[01 Condition]]s or effects, creatures caught in the spells area of effect must make a [[Basic Saving Throw]] determined by the effect (DM Discretion). The spells damage and healing dice are reduced by 1 (minimum of a d4) for creatures in the effect area.  Regardless of how many creatures are in the area of effect, a maximum of three creatures can be affected by this source. If more than three creatures would be affected, select three and the others remain unaffected.

**At Higher level:** Increase the area of effect by 5 feet.

## Primal
### Cantrips
#### Character Level 5+
##### Elemental Imbuement
**Target:** Target of Cantrip
**Duration:** varies
When you select this source at level 5, pick an elemental damage type (Fire, Electricity, Acid, or Cold). Cantrips using this source only gains benefits from the elemental damage you selected. When casting a cantrip with this source, change this spells listed damage to the elemental damage you picked. The target(s) takes on an additional effect depending on which element you picked.

**Fire:** You deal 2 persistent fire damage. This increases to 4 at level 11.
**Electricity:** Dexterity saving throw. On failure, the target takes a -2 penalty to Attack rolls. They can repeat this save at the end of each of their turns. This penalty increases to -4 at level 11. 
**Acid:** Dexterity saving throw. On failure, the targets AC is reduced by -1 for 1 minute. They can repeat this save at the end of each of their turns. This increases to -2 at level 11.
**Cold:** Constitution saving throw. On failure, reduce the targets movement speed by 5 feet for 1 minute. They can repeat this save at the end of each of their turns. This increases to 10 at level 11. 

**At Higher Levels:** Pick an additional element type. You can choose between the elemental types you selected. 