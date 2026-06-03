# Haunted Hunters  
## Project Requirements Document (PRD v0.1)

---

# Project Vision

Haunted Hunters is a mobile-first monster collection and supernatural investigation game.

Players build teams of Hunters, investigate haunted locations, capture paranormal entities, expand their Headquarters, and uncover a growing supernatural world.

---

# Core Gameplay Focus

The game is built around:

- Collection
- Progression
- Team Building
- Strategic Decision Making
- Exploration

NOT real-time action combat.

---

# Target Platforms

## MVP Targets
- Web Browser
- Android

## Future Platforms
- iOS
- Steam

---

# Target Audience

## Primary Audience

Age: 25–45

Players who enjoy:

- Monster collecting games
- Idle progression systems
- Roguelite structures
- Dark fantasy themes

---

## Reference Games

- AFK Journey
- Pokémon
- Darkest Dungeon
- Monster Sanctuary

---

# Core Gameplay Loop

Recruit Hunters  
↓  
Select Mission  
↓  
Investigate Location  
↓  
Encounter Entity  
↓  
Battle / Capture  
↓  
Collect Rewards  
↓  
Upgrade HQ  
↓  
Unlock New Content  
↓  
Repeat  

---

# Minimum Viable Product (MVP)

The MVP must include the following systems.

---

# 1. Headquarters System

## Purpose
Central player progression hub.

## Requirements

### Rooms
- Operations Center
- Research Lab
- Armory
- Containment Wing

### Features
- Upgrade rooms
- View collections
- Recruit hunters
- Start expeditions

---

# 2. Hunter System

## Purpose
Primary player-controlled units.

---

## Attributes

- Name
- Level
- Health
- Sanity
- Attack
- Defense
- Speed

---

## Required Classes

- Investigator
- Exorcist
- Medium
- Mechanic

---

## Progression

- Gain XP
- Level up
- Stat growth

---

# 3. Monster System

## Purpose
Primary collection mechanic.

---

## Attributes

- Name
- Type
- Threat Level
- Health
- Attack
- Capture Difficulty
- Rarity

---

## Rarity Tiers

- Common
- Rare
- Epic
- Legendary

---

## Collection Tracking

The system must track:

- Discovered
- Captured
- Defeated

---

# 4. Investigation System

## Purpose
Create player agency before combat.

---

## Requirements

Each location contains:

- Events
- Clues
- Choices

---

## Example Event

You discover strange footprints.

Options:
- Investigate
- Ignore
- Collect Sample

---

## Effects of Choices

Choices affect:

- Rewards
- Encounter rates
- Capture chance

---

# 5. Expedition System

## Purpose
Core gameplay loop.

---

## Flow

Select:
- Location
- Team
- Equipment

Then begin expedition.

---

## Structure

Each expedition includes:

- 3–5 investigation nodes
- Random encounters
- Final encounter

---

# 6. Combat System (MVP)

## Purpose
Simple auto-resolved battles.

---

## Design Goal

Combat is automated.

Player influence occurs before combat.

---

## Combat Features

- Basic Attack
- Special Ability
- Status Effects

---

## Status Effects

### Positive
- Inspired
- Protected
- Focused

### Negative
- Fear
- Bleeding
- Poisoned
- Possessed

---

# 7. Capture System

## Purpose
Core retention mechanic.

---

## Rules

Capture is possible when:
- Entity health is below threshold

---

## Capture Modifiers

- Hunter abilities
- Entity rarity
- Equipment

---

## Outcomes

- Success
- Escape
- Failed capture
- Equipment loss

---

# 8. Equipment System

## Categories

### Weapons
- Blessed Revolver
- Iron Crowbar
- Spirit Blade

### Charms
- Holy Symbol
- Rabbit Foot
- Ghost Lantern

### Utilities
- Trap Kit
- Camera
- EMF Reader

---

# 9. Locations

## MVP Locations

- Haunted Farm (Threat 1)
- Abandoned School (Threat 2)
- Forgotten Mine (Threat 3)
- St. Mary’s Hospital (Threat 4)

---

## Requirements

Each location must include:

- Unique events
- Unique entities
- Unique rewards

---

# 10. Resource System

## Currencies

### Gold
Used for:
- upgrades
- recruitment

### Research Points
Used for:
- unlocking monster data
- upgrading tools

### Essence
Used for:
- crafting
- special upgrades

---

# 11. Progression System

## Player Account Level

Unlocks:

- new Hunters
- new Locations
- new HQ rooms

---

## Player Design Goals

Players should always have:

- Short-term goals
- Medium-term goals
- Long-term goals

---

# Art Direction

## Style
Top-down pixel art

## Tile Size
32x32

## Character Size
32x32

## Monster Size
32x32–64x64

## UI Style
Dark Victorian Horror

## Color Palette
- Dark blue
- Purple
- Brass
- Aged paper

---

# Audio Requirements

MVP includes:

- Ambient soundtrack
- UI sounds
- Encounter sounds
- Capture success sound

---

# Technical Requirements

## Engine
Unity

## Language
C#

## Architecture
Scriptable Objects for:

- Hunters
- Monsters
- Equipment
- Locations

---

# Save System

Must persist:

- Hunter progression
- Collection book
- Resources
- HQ upgrades

---

# MVP Success Criteria

A player must be able to:

- Recruit a Hunter
- Upgrade Headquarters
- Complete an Expedition
- Encounter an Entity
- Win Combat
- Capture an Entity
- Add Entity to Collection Book
- Unlock a New Location
- Play 30 minutes without running out of content

---

# Estimated Development Scope

## Solo Weekend Developer Estimate

### Phase 1 (4–6 weeks)
- Core framework
- Data structures
- Save system
- Headquarters

### Phase 2 (4–6 weeks)
- Hunters
- Combat
- Entities

### Phase 3 (4–6 weeks)
- Investigation system
- Locations
- Progression

### Phase 4 (2–4 weeks)
- UI polish
- Audio
- Balancing

---

# Recommended MVP Scope Reduction

For first playable version:

- 1 Location
- 4 Hunters
- 12 Monsters
- 1 HQ Room

If this is fun:
expand outward safely.