# Obsidian Frequency — Short Form Content System
## TikTok / YouTube Shorts Production & Strategy Reference — v4.0

---

# Revision Notes

## v1.0 — Initial system. Audio-heavy formats. No presenter.
## v2.0 — HeyGen added. Avatar presenter formats added. Audio-only formats removed.
## v3.0
- HeyGen removed entirely — wrong aesthetic for painterly illustrated direction
- Runway ML added for animating Midjourney stills into atmospheric video clips
- Personal Field Log and Field Reporter formats removed — both were avatar/presenter
  driven and do not fit the painterly dark illustration aesthetic
- All short-form formats now built around Midjourney + Runway ML pipeline
- Visual direction confirmed: painterly dark illustration across ALL content —
  long form AND short form. Consistent cinematic dark art aesthetic throughout.
- Short-form content is now animated illustrated clips, not found footage or
  presenter-led video
## v4.0 (this version)
- **Classified Transmission (black screen + text) retired entirely.**
  Every short now needs a real, dynamic visual — an entity, a location,
  a character, an object in motion — never static text on black.
- **Animated Document Reveal sharply restricted.** No more slow pans
  over paper as a short's entire visual content — long-form already
  does that, and doing it again in shorts reads as reused footage
  rather than its own piece. Document Reveal survives only for the rare
  case where a physical document comparison genuinely IS the content
  (the shared-signatory ARG moments).
- **Two new formats added:** Field Dispatch and Character Vignette —
  see below. These are options for when a human presence suits the
  content (radio exchanges, institutional beats), not a requirement for
  every short. Entity Reveal, Location Reveal, and Illustrated Incident
  Fragment remain the core of the system and need no human figure at
  all — an entity, a location, or a sequence of atmospheric images
  already has plenty of personality on its own. The point is that
  nothing should feel like static text over black or a disembodied
  slow pan across paper — not that every short needs a person in it.
- **Character Design Rule (new, applies wherever a human figure IS
  used):** any human figure — Dispatcher, Field Operative, unnamed
  Hunter — is shown from behind, in silhouette, or with the face
  obscured. Consistent with the channel's existing no-named-individuals
  convention. This rule only applies when a format calls for a person
  on screen; plenty of formats don't.

---

# Visual Direction — Confirmed & Locked

## Core Aesthetic
Painterly dark illustration. Cinematic dark art.
NOT photorealistic. NOT found footage. NOT presenter-led.

Every piece of content — long form and short form — feels like it came
from the same dark, illustrated, cinematic world. Think dark graphic novel
brought to motion. The Archivist voice and institutional documents provide
the "leaked evidence" framing. The imagery provides the atmosphere.

## Why This Direction
- Distinctive and ownable — nobody else in the paranormal horror YouTube/TikTok
  space has this exact aesthetic combination
- Achievable as a solo creator without filming, acting, or 3D rendering
- Scales consistently across both platforms and both content lengths
- Midjourney + Runway ML produces this look reliably without requiring
  animation skill

---

# Production Stack — v3.0 (Final)

| Tool | Role |
|------|------|
| **Midjourney** | All image generation — documents, entities, locations, atmospheric scenes. Painterly dark illustration style throughout. |
| **Runway ML** | Animates Midjourney stills into short atmospheric video clips. Adds subtle motion (fog rolling, light flickering, camera drift) without destroying the painterly style. |
| **ElevenLabs** | All voice and audio — Archivist narration processing, ambient layering, degradation effects |
| **CapCut** | Final assembly for ALL content — long form and short form. Text overlays, captions, transitions, effects. |

## REMOVED — Do Not Reintroduce Without Explicit Creator Request
- **HeyGen** — removed. Avatar/presenter aesthetic conflicts with painterly
  illustration direction. B-roll generation capability also replaced by
  Runway ML + Midjourney pipeline which preserves art style.
- **DaVinci Resolve** — replaced by CapCut for all editing
- **Audacity** — replaced by ElevenLabs

## Midjourney Style Foundation
All images use painterly illustration language — never photorealistic.
Core style phrases for every prompt:
- `painterly dark illustration`
- `concept art style`
- `highly detailed brushwork`
- `textured paint surface visible`
- `cinematic dark fantasy illustration`
- `in the style of a dark graphic novel cover`
- `--stylize 800` (minimum — go higher for more illustration quality)
- `--style raw`

Never use: `photorealistic`, `shot on film`, `documentary photography`,
`hyperrealistic`, `grain`, `film grain` — all pull toward photography not illustration.

## Runway ML Role
Takes a completed Midjourney still and adds:
- Subtle camera drift (slow push in or pull back)
- Atmospheric particle movement (fog, dust, particulate)
- Light source flickering (lantern, fluorescent, ambient)
- Environmental motion (distant movement, water ripple, tree movement)

Output is a 4–10 second seamlessly looping or non-looping atmospheric clip.
Multiple clips assembled in CapCut with ElevenLabs audio = finished short.

---

# Purpose Of This System

Short form content exists to:
- Reach cold audiences quickly through algorithm-friendly discovery
- Function as atmospheric "transmissions" from the Obsidian Frequency world
- Drive curiosity toward long-form incident reports and entity files
- Maintain channel presence between long-form uploads
- Generate ARG cross-references at higher volume than long form alone

Every short should leave the viewer with one specific question that only
the long-form channel can answer.

---

# Relationship to Long Form

## The Core Rule
Short form clips are atmospheric fragments — windows into the world rather
than standalone content. Every short connects to a specific long-form video.
Captions direct curious viewers toward the long-form payoff.

## Launch Sequencing
1. Video 01 (The Veil Explained) produced and ready
2. 2–3 short form clips produced in parallel — referencing only what
   Video 01 establishes (The Veil, Veil Breaches, Directorate existence)
3. Long form Video 01 publishes first
4. Short form clips begin publishing within days
5. As later long-form videos release, short-form clips referencing that
   specific lore can follow
6. Short form must never get ahead of long-form canon

---

# Short Form Content Formats — v4.0

## Character Design Rule — Applies Whenever a Human Figure Is Used
Not every format needs a person — Entity Reveal, Location Reveal, and
Illustrated Incident Fragment carry plenty of personality through the
entity, environment, or image sequence alone. But when a format does
call for a human figure — Dispatcher, Field Operative, unnamed Hunter —
that figure is shown from behind, in silhouette, or with the face
obscured by shadow, framing, or equipment (headset, gas mask, turned
collar). No clear faces, ever. This extends the channel's existing
no-named-individuals rule into visual design, and reuses the Dispatcher
character design already established (back-of-head, partial view,
smoking cigarette, dated comms room) for the long-form Short 01
redesign — reuse that same character across every Field Dispatch short
rather than creating a new one each time.

---

## 1. Animated Entity Reveal
### What It Is
A Midjourney entity image animated via Runway ML. The entity is barely
visible — implied through environment and silhouette. A single line from
the entity file appears as text overlay. Ends abruptly.

### Production Method
1. Generate entity image in Midjourney (painterly, silhouette/suggestion only)
2. Animate in Runway ML — slow push toward entity, fog movement, light flicker
3. Add ElevenLabs narration (single line, clinical) or silence with ambient tone
4. Text overlay in CapCut — entity classification code and threat level only
5. Assemble and export vertical (9:16) in CapCut

### Best For
Any entity in the roster. Most algorithm-friendly format — taps into
existing cryptid/horror sighting content appetite on TikTok and Shorts.
Common and Rare entities work best — save Legendaries for later in the arc.

### Runtime
10–20 seconds. End on the image, not after it.

---

## 2. Animated Location Reveal
### What It Is
A Midjourney location image animated via Runway ML. An establishing
atmospheric shot of a canon location — mine entrance, transit tunnel,
abandoned facility. No entity visible. Pure environmental dread.
Archivist annotation appears as text overlay.

### Production Method
1. Generate location image in Midjourney (painterly, no people, no entities)
2. Animate in Runway ML — slow drift, fog movement, light behavior
3. Single Archivist annotation as text overlay in CapCut
4. Ambient ElevenLabs audio underneath — location-appropriate
5. Assemble and export vertical (9:16) in CapCut

### Best For
Establishing canon locations before their long-form video releases.
Creates anticipation. Rewards viewers who recognize the location when
the full incident report drops.

### Runtime
15–25 seconds.

---

## 3. Field Dispatch (replaces Classified Transmission, v4.0)
### What It Is
A Midjourney-generated character — the Dispatcher, at a comms desk, or a
Field Operative in the field — animated via Runway ML, delivering or
receiving a radio exchange. **Never a black screen.** This format exists
specifically so audio-drama beats (faction communications, field orders,
intercepted radio) still have a visual home with personality, replacing
the old black-screen-and-text approach entirely.

### Production Method
1. Generate the character image in Midjourney — back-of-head/silhouette
   framing per the Character Design Rule above, real environment (comms
   room, field location) built into the same image
2. Animate in Runway ML — subtle motion appropriate to the scene (smoke
   drift, light flicker, slight camera drift), figure itself stays
   largely still, consistent with the existing Dispatcher animation
   approach
3. ElevenLabs — same heavy radio processing as the old Classified
   Transmission format, just paired with a visual now instead of black
4. CapCut — text can still appear on screen synced to dialogue if
   useful, but it supplements the image rather than replacing it entirely
5. Cut to static or hard cut before the exchange resolves

### Best For
Faction communications, Hunter field orders, Directorate internal
directives — everything the old Classified Transmission format handled,
now with a face-behind-the-voice (never a face itself) to anchor it.

### Runtime
12–20 seconds.

---

## 4. Character Vignette (new, v4.0)
### What It Is
A Hunter, Field Operative, or Dispatcher shown physically doing
something in-world — walking a corridor, reaching for a door, standing
at a threshold, reviewing something at a desk. No dialogue required.
This format exists to replace document-only beats (institutional
detail, ARG-adjacent moments, atmosphere pieces) with actual physical
presence instead of paper filling the frame.

### Production Method
1. Generate the character + environment image in Midjourney — per the
   Character Design Rule, faceless framing, full scene built in
2. Animate in Runway ML — the character can have minimal motion (a
   hand turning a page, a slow walk, a pause at a door) unlike Field
   Dispatch's mostly-still figures
3. ElevenLabs — optional single Archivist line or no narration at all,
   ambient only
4. CapCut — minimal or no text overlay; let the scene carry it
5. End on stillness, not motion

### Best For
Institutional/faction beats that used to default to Document Reveal —
a Hunter reviewing a case file, a staffer walking Directorate corridors,
someone pausing at a threshold. Gives the arc's bureaucratic-horror
material an actual body instead of only paper.

### Runtime
12–20 seconds.

---

## 5. Illustrated Incident Fragment
### What It Is
A series of 2–3 Midjourney images assembled in sequence in CapCut,
each animated briefly in Runway ML. Archivist narration reads a single
paragraph — one incident, one moment, nothing resolved.
Feels like a motion comic page.

### Production Method
1. Generate 2–3 thematically connected images in Midjourney
2. Animate each briefly in Runway ML (4–6 seconds each)
3. ElevenLabs narration — single paragraph, 50–70 words maximum
4. Assemble in CapCut — images cut in sequence under continuous narration
5. End on the most atmospheric image, hold 2 seconds after narration ends
6. Export vertical (9:16)

### Best For
Historical incidents — Black Vein, Ashfall, Station 13. Three images
can suggest an entire event arc without explaining it. This is your
richest short-form format in terms of lore delivery.

### Runtime
20–35 seconds.

---

## 6. Document in Hand (restricted, formerly Animated Document Reveal, v4.0)
### What It Is
**Use sparingly — this is the exception, not a default option.** A
document is visible, but always in a character's hands or under direct
physical examination, never floating alone under a slow disembodied
camera pan. Reserved specifically for moments where a physical document
comparison genuinely is the content — the shared-signatory ARG beats
being the clearest example, where the point is literally "look at this
object."

### Production Method
1. Generate the character (per Character Design Rule) holding or
   examining the document in Midjourney — the document is a prop within
   a scene, not the entire frame
2. Animate in Runway ML — minimal motion, page held steady, maybe a
   slight tilt as if being angled toward light
3. ElevenLabs — optional single line, or silence
4. CapCut — text overlay only if essential; prefer letting the character
   and object read visually
5. Hold, then cut

### Best For
The shared-signatory comparisons across Videos 08–10 and their
short-form echoes, and similar rare "the object IS the reveal" moments.
**Do not use this format for routine institutional flavor, teases, or
atmosphere pieces — those now belong to Character Vignette or Field
Dispatch instead.**

### Runtime
15–20 seconds.

---

# RETIRED — Classified Transmission (v1.0–v3.0)
Black screen, word-by-word text, no image. Retired in v4.0. See Field
Dispatch above for the replacement. Do not build new shorts using the
black-screen approach — if a script in `media/shorts/` still specifies
it, that script needs to be revised, not produced as written.

---

# Production Difficulty Ranking — v4.0

| Format | Difficulty | Primary Tools |
|--------|-----------|---------------|
| Field Dispatch | Low–Medium | Midjourney + Runway ML + ElevenLabs + CapCut |
| Animated Entity Reveal | Low–Medium | Midjourney + Runway ML + CapCut |
| Animated Location Reveal | Low–Medium | Midjourney + Runway ML + CapCut |
| Character Vignette | Low–Medium | Midjourney + Runway ML + CapCut |
| Document in Hand | Low–Medium | Midjourney + Runway ML + CapCut |
| Illustrated Incident Fragment | Medium | Midjourney (×3) + Runway ML + CapCut |

**Note (v4.0):** every format now requires at least one Midjourney
generation and a Runway ML pass — the old "zero image generation"
Classified Transmission format is retired, so there's no longer a
lowest-tier option that skips image generation entirely. Field Dispatch
is the closest equivalent (single character image, minimal animation)
and is the recommended starting point instead.

## Recommended Starting Formats
Begin with **Field Dispatch** — a single character image (the
Dispatcher) with minimal Runway ML animation, close in production
weight to the old Classified Transmission but with an actual visual.
Then move to **Animated Entity Reveal** — one image, one animation, the
clearest test of the Midjourney + Runway ML pipeline on a creature
subject.

---

# Canon Connections — Short Form to Long Form Map

**Note (v4.0):** Format column updated to match the current format
library. This table is the high-level index; the actual dated,
fully-scripted shorts live in `media/shorts/shorts_batch_*.md` and
`shorts_launch_batch_01.md`, cross-referenced against
`media/youtube/arc-1-opened-file/halloween-2026-release-calendar.md`.

| Short Form Clip Idea | Format | Connects To | Long Form Payoff |
|----------------------|--------|-------------|------------------|
| Transmission: "Breach confirmed, Region 1" | Field Dispatch | The Veil / Directorate | Video 01 |
| The Hollow Boy — farmhouse doorway | Animated Entity Reveal | HH-014 The Hollow Boy | Video 01 adjacent |
| Black Vein mine entrance, night | Animated Location Reveal | Black Vein Collapse | Video 03 |
| Miner's Echo — tunnel silhouette | Animated Entity Reveal | HH-016 The Miner's Echo | Video 04 |
| Ashfall facility corridor fragment | Illustrated Incident Fragment | Ashfall Experiments | Video 05 |
| Station 13 platform — no train | Animated Location Reveal | Station 13 Incident | Video 06 |
| The Hollow King — forest edge | Animated Entity Reveal | HH-020 The Hollow King | Video 07 |
| Wardens directive, Hunter reviewing it | Character Vignette | The Wardens | Video 08 |
| Architects project approval, staffer reviewing it | Character Vignette | The Architects | Video 09 |
| Purple light anomaly — Veil event | Animated Location Reveal | Threshold Initiative | Video 10 |
| Echo-4 deployment orders, Dispatcher reading them aloud | Field Dispatch | Recovered Log: Echo-4 | Video 11 |
| Timeline document, blank entry held up to light | Document in Hand | Timeline Has a Gap | Video 12 |
| Final orders received — Dispatcher, last exchange | Field Dispatch | File Zero | Video 13 |

## ARG Seed Distribution
Recommend 1 First Phantom seed per 3–4 short clips.
Document in Hand is the strongest seed format when a document detail
truly is the point — but per the v4.0 restriction, use it sparingly and
always with a character present. Character Vignette and Field Dispatch
can also carry seeds (a detail glimpsed over a character's shoulder, a
line spoken aloud that the audience has to catch) without falling back
into the old paper-only pattern.

---

# Platform Notes

## TikTok
- Completion rate is primary signal — keep clips tight, end before
  the audience expects
- Captions never explain — direct only ("full file: link in bio")
- Painterly illustration aesthetic is unusual enough on TikTok to
  stop scrolling — lean into that distinctiveness

## YouTube Shorts
- Tied to main channel — Shorts drive subscriber conversion to
  long-form library
- Maintain institutional tone in captions
- Shorts shelf keeps channel active between long-form uploads

## Cross-Posting
Same clip on both platforms. Adjust caption tone slightly —
TikTok can be minimally more atmospheric/cryptic,
YouTube Shorts stays institutional.

---

# Content Calendar Structure

**Active push in effect through Video 13 (Nov 17, 2026).** The cadence below
governs Halloween-season launch through Arc 1 completion. Exact dated short
concepts live in `../youtube/arc-1-opened-file/halloween-2026-release-calendar.md`
— this section covers the recurring structure only. Steady-state cadence
(further down this section) resumes for Arc 2.

## Pre-Launch Phase
- Produce Video 01 (long form)
- Produce 2 short clips using only Video 01 lore
- Used: 1 Field Dispatch (Breach Confirmed) + 1 Animated Entity Reveal
  (The Hollow Boy — connects to Veil/Directorate world without
  requiring a specific incident to be released yet)

## Launch Week (compressed for the active push)
- Day 1 (Tue Aug 25): Video 01 publishes
- Day 2 (Wed Aug 26): First short publishes
- Day 4 (Fri Aug 28): Second short publishes

Shorts are compressed into the first four days rather than spread across the
full week, so they overlap the algorithm's seed-audience test window on
Video 01 while engagement is highest.

## Active-Phase Ramp (Aug 25 – Oct 24)
| Window | Shorts/week |
|---|---|
| Aug 25 – Sep 7 | 2/week |
| Sep 8 – Sep 28 | 3/week |
| Sep 29 – Oct 24 | 4–5/week (peak) |
| Oct 25 – Oct 31 | Daily (Halloween week push) |

Each new long-form video unlocks 3–5 new short concepts per the Canon
Connections map above. Never post shorts referencing unreleased long-form
content.

## Steady-State Cadence (resumes after Video 13 / Arc 2)
- Long form: every 3–6 weeks
- Short form: 2–4 clips per week

---

# Production Workflow Per Short

1. Select format + canon connection from map above
2. Write concept (what is seen/heard, what question it raises)
3. Generate image(s) in Midjourney — painterly style, correct prompt language
4. Animate in Runway ML if image-based format (4–10 seconds per clip)
5. Record/process audio in ElevenLabs if narration needed
6. Assemble in CapCut — overlays, text, captions, transitions
7. Export vertical (9:16)
8. Post with minimal directional caption

## Realistic Time Per Short
- Field Dispatch: 30–50 minutes
- Animated Entity/Location Reveal, Character Vignette, Document in Hand: 45–90 minutes
- Illustrated Incident Fragment: 90–120 minutes

---

# What Short Form Never Does

- Never fully explains an entity, incident, or organization
- Never shows a Legendary entity clearly — implication only
- Never depicts The First Phantom in any form
- Never uses jump scares as primary tension mechanism
- Never gets ahead of long-form canon
- Never uses photorealistic imagery — painterly illustration only
- Never breaks the dark art aesthetic with bright colors, clean design,
  or modern visual language
