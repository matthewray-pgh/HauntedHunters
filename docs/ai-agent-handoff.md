# Obsidian Frequency — Project Summary & AI Agent Handoff Document
## Version 3.6 | Complete Session Summary

---

# What This Document Is

This document summarizes the full creative and strategic development of
the Obsidian Frequency YouTube/TikTok channel and its associated universe,
Haunted Hunters.

It is written for an AI agent picking up this project mid-stream.
Read it fully before responding to any user queries about this project.
All decisions documented here are confirmed and should be treated as locked
unless the user explicitly requests a change.

## Version History
- v1.0 — Initial handoff. Long-form strategy complete. Visual direction
  for long-form videos flagged as unresolved.
- v2.0 — Visual direction partially resolved. HeyGen added. Short Form
  Content System added. First short-form scripts (HeyGen-dependent) written.
- v3.0 — Visual direction fully confirmed: painterly dark
  illustration across ALL content. HeyGen removed. Runway ML added.
  Short Form Content System rebuilt (v3.0). Launch Batch scripts replaced.
  Tech stack finalized: Midjourney + Runway ML + ElevenLabs + CapCut.
- v3.6 (this version) — Short-form format system overhauled to v4.0:
  Classified Transmission (black screen + text) retired entirely;
  Animated Document Reveal sharply restricted (no more slow pans over
  paper as a short's primary content). All 34 non-launch shorts
  (`shorts_batch_02` through `shorts_batch_10`) and Short 01 in
  `shorts_launch_batch_01.md` reworked accordingly — most Document
  Reveal entries converted to Location Reveal with a real built scene
  (new recurring Directorate HQ location, color-accented per faction:
  cool grey-blue/Wardens, amber/Architects, purple/Threshold
  Initiative), Classified Transmission entries converted to Location
  Reveal or Field Dispatch. Note: a human figure (Dispatcher, Field
  Operative) is NOT required in every short — Entity Reveal, Location
  Reveal, and Illustrated Incident Fragment carry personality without
  one. The requirement is genuine visual interest, not literal human
  presence. `short_form_content_system.md` bumped to v4.0 with full
  format library and revision notes.
- v3.5 — All 34 remaining shorts (Sep 1 through Oct 31,
  per `halloween-2026-release-calendar.md`) now have full production
  scripts: Midjourney prompts, Runway ML motion notes, ElevenLabs
  direction, CapCut assembly, captions. Combined with Shorts 01-02
  (already complete in `shorts_launch_batch_01.md`), all 36 shorts from
  launch through Halloween Day are now production-ready. Two structural
  notes worth knowing: (1) reused long-form Midjourney prompts were
  regenerated at `--ar 9:16` rather than copied verbatim, since the
  source prompts are horizontal/portrait-document ratios; (2) the
  shared-signatory ARG seed now has three additional short-form
  moments (Oct 17, Oct 23, Oct 28) beyond its three long-form
  appearances, with Oct 28 explicitly flagged as needing pixel-identical
  matching across all three composited images before publishing.
- v3.4 — All 13 Arc 1 scripts complete (Videos 01–13,
  see completed documents table). Video 13 (File Zero) script includes
  two flagged interpretive choices for creator review: dropping the
  standard pre-roll/post-roll watermark for this video only, and tying
  File Zero's File ID to Video 01's previously-unassigned personnel
  file 0000. Neither is stated outright in the video pipeline outline —
  both are read as the most consistent extension of it. Two
  color-palette gaps remain open (Orange for Video 04, cold blue-grey
  `#5A6470` for the Video 08/09/10 shared signatory) — see Open
  Questions. Next work on this project moves to production (asset
  building, recording, assembly) or Arc 2 planning, not further Arc 1
  scripting.
- v3.3 — Scripts written through Video 12 (see completed
  documents table). Pre-1968 canon date locked to 1919, closing the last
  Critical open question blocking Video 12 production. Storyboards
  discontinued as a default after Video 01 (decision recorded below).
  Two color-palette gaps remain open (Orange for Video 04, cold
  blue-grey `#5A6470` for the Video 08/09/10 shared signatory).
- v3.2 — Storyboards discontinued after Video 01 (see decision below).
  Scripts written through Video 07.
- v3.1 — Full canon reconciliation pass. Series Arc Map,
  Arc 1 Content Inventory, and First Phantom Seed Map rewritten to match
  Video Pipeline v2.0's 13-video roster (previously flagged as a known
  inconsistency — now resolved). Hunter roles locked at 5 (Cryptozoologist
  added to PRD and Video 01 script/storyboard, which had drifted to 4).
  "Carapax Prawn" (HH-018) removed — it was never a real canon entity file;
  entity count corrected to 8. Directorate founding date confirmed as 1968
  everywhere (Release Strategy's pinned-comment example previously said
  "the following year"). Headquarters rooms reconciled to one 7-room
  canonical list (Operations Center, Research Lab, Armory, Containment
  Wing as MVP; Archive, Ritual Chamber, Trophy Hall as post-MVP) across
  the PRD and the Headquarters System doc. Crimson / Alert `#7A2E2E` added
  as a seventh locked brand color. Repo Structure Reference and Completed
  Documents table corrected to match actual repo paths (previous version
  described a hypothetical underscore-path structure that never existed).

---

# Project Overview

## The Universe
**Haunted Hunters** is a paranormal investigation universe centered around
a covert organization called the Hunters Directorate and a dimensional
phenomenon called The Veil.

## The Channel
**Obsidian Frequency** is the YouTube/TikTok channel built around this
universe. It presents itself as a repository of leaked, recovered, and
declassified Directorate materials — assembled and released by an
anonymous insider known only as THE ARCHIVIST. The channel now operates
on two parallel content tracks: long-form documentary/lore videos and
short-form "evidence" clips (see Content Structure below).

## The Game
Haunted Hunters is also being developed as a mobile-first monster
collection and paranormal investigation game (Unity / C#). The channel
functions as world-building content and primary marketing for the
eventual game launch.

## The Creator
Solo developer / content creator. Working weekends.
Has made Minecraft gameplay videos previously — understands basic
recording, editing, and publishing workflow.
Equipment: PC + microphone + camera.

---

# Channel Identity

## Channel Name
Obsidian Frequency

## Previous Name Considered
Haunted Hunters — abandoned because an existing YouTube channel
(ghost hunting, real-world footage) already uses this name with
120 videos and 1k+ subs.

## Names Also Rejected
"Dead Frequency" (existing video game + existing music channel),
"Obsidian Archive" (existing channel name), "The Obsidian Archives"
(existing animated series channel).

## Tagline
*"They didn't want this found."*

## Core Premise
The Archivist — an anonymous Directorate insider — leaks classified files.
The channel IS the leak. Every video is evidence. Every viewer is a witness.

## Tone
Supernatural thriller. Analog horror. Institutional paranormal.
References: Supernatural (TV), X-Files, Local 58, Mandela Catalogue,
Kane Pixels Backrooms. NOT: campy, comedic, jumpscare-driven, Lovecraftian
cosmic horror.

## The Archivist Rules
- Never appears on camera (long-form)
- Never speaks directly to the audience
- Never uses "I" in annotations
- Annotations are sparse — one or two lines maximum
- Clinical tone, never dramatic
- Urgency implied, never stated

---

# Content Structure — Two Parallel Tracks

## Long Form (YouTube, 6–8 minutes)
Document-driven incident reports, entity files, and Directorate
intelligence. The Archivist's voice (processed/degraded narration)
reads recovered documents. See "Arc 1" section below for full roster.

## Short Form (TikTok + YouTube Shorts, 10–40 seconds)
Found-footage style "evidence" clips that function as a funnel into
long-form content. Built around recurring formats and characters.
See "Short Form System" section below for full detail.

## How They Relate
Short form clips are not standalone — they are field evidence pointing
toward long-form payoffs. Every short connects to a specific long-form
video via the Canon Connections map. Short form should never get ahead
of long-form canon (no spoiling incidents not yet released in long form).

---

# Creative Direction

## Core Aesthetic
Industrial Appalachian paranormal horror. NOT Victorian Gothic
(the original brand sheet skewed Gothic — needs regeneration per
Visual Style Guide).

## Aesthetic Pillars
- Rust belt decay — abandoned factories, steel mills, decayed suburbs
- Appalachian horror — mines, tunnels, isolated communities
- Forbidden science — underground labs, containment chambers
- Transit systems — subway tunnels, abandoned stations
- Subterranean spaces — collapsed mines, non-Euclidean underground structures
- Flooded / corrupted environments
- Analog technology — CRT monitors, VHS, reel-to-reel, early radio equipment
- Occult science framing — no magic systems, scientific interpretation
  of anomalous reality

## Design Rule
Any new entity, location, or incident must reinforce at least one of:
industrial decay / isolation / subterranean tension / institutional
secrecy / environmental corruption / analog technological limitations /
Veil interaction instability.

---

# Brand System

## Brand Colors (Locked)
| Role | Hex |
|------|-----|
| Primary Background | #1A1D1F |
| Shadow / Depth | #2B3D3D |
| Veil Color | #5F4B6E |
| Highlight / Dust | #B8A9BA |
| Brass / Warmth | #8C6E4A |
| Crimson / Alert | #7A2E2E |
| Paper / Text | #DCE6D6 |

## Typography (Locked)
- Primary: Cinzel Decorative Bold
- Secondary: Raleway Condensed

## Brand Mark (Locked)
HH monogram with compass/crosshair framing. Apply worn stamp
treatment — never clean or glossy.

## Brand Sheet Status — STILL UNRESOLVED
Original brand sheet was generated with Victorian Gothic aesthetic.
Needs to be regenerated using industrial Appalachian direction via
Midjourney prompts in the Visual Style Guide document. This has NOT
been done yet as of this version. Colors, typography, monogram, and
iconography all stay — only imagery needs regeneration.

---

# PRODUCTION STACK — UPDATED (Critical Change from v1.0)

## Current Tools (Locked)
| Tool | Role |
|------|------|
| **Midjourney** | Still images — document textures, entity silhouettes, location art |
| **HeyGen** | Avatar/presenter generation (talking-head formats) AND atmospheric B-roll generation via integrated Sora/Veo/Kling access (capability confirmed as of 2026) |
| **ElevenLabs** | Voice processing, degradation effects, layered audio (static, radio, ambient) |
| **CapCut** | Final assembly and editing for ALL content — both long form AND short form |

## DEPRECATED — Do Not Reference As Current
- DaVinci Resolve — replaced by CapCut for all editing
- HeyGen — removed entirely. Avatar/presenter aesthetic conflicts with
  confirmed painterly dark illustration direction. B-roll capability
  also replaced by Midjourney + Runway ML pipeline which preserves
  the painterly art style that HeyGen cannot match.
- Audacity — replaced by ElevenLabs
- Adobe Podcast Enhance, Suno — mentioned in early brainstorming,
  not part of confirmed final stack

## Runway ML Role (confirmed)
Takes completed Midjourney painterly stills and adds subtle atmospheric
motion — fog rolling, light flickering, camera drift, particle movement.
Output is a 4–10 second clip that preserves the painterly illustration
style of the source image. This is the critical tool that makes short-form
animated clips possible without destroying the art aesthetic.

---

# Canon Lore — Established & Locked

## Core Phenomena

### The Veil
Hidden dimensional layer beneath stable human reality. Not a separate
universe, afterlife, or alternate dimension. Described internally as
"reality underneath reality." Linked to human consciousness, memory,
trauma, emotion, death, perception. Classification: OBSIDIAN LEVEL —
Restricted Directorate Access.

### Veil Breaches
Locations where the barrier between stable reality and the Veil has
weakened. Severity levels I through V. Level V: Catastrophic Veil
integration. Increased activity near: mass trauma, industrial disasters,
underground structures, abandoned institutions, prolonged human suffering.
Cover stories used: gas leaks, structural instability, contamination,
terrorist threats, industrial accidents.

## The Organization

### The Hunters Directorate
Covert international paranormal containment organization. Formed
following the Black Vein Collapse in 1968. Officially does not exist.
Hunter mortality: classified. Described internally as "expendable but
valuable."

### Internal Factions
**The Wardens** — believe the Veil must remain sealed permanently, at
any cost.
**The Architects** — seek controlled Veil manipulation. Responsible
for Ashfall Experiments.
**The Threshold Initiative** — believe humanity must adapt to inevitable
Veil integration.
One unknown individual founded or approved all three opposing factions.
This is a First Phantom ARG seed — do not reveal the identity.

### Hunter Roles
- Investigator — Reveal Weakness ability
- Exorcist — Holy Seal ability
- Mechanic — Electro Trap ability
- Cryptozoologist — Calm Beast ability
- Medium — Spirit Sense ability

## Historical Incidents (All Canon / Locked)

### The Black Vein Collapse — 1968
Location: Appalachian Mining Region. Mining crews uncovered subterranean
structure inconsistent with geological formations. Survivors reported
impossible tunnel geometry, echoing voices, non-Euclidean passageways.
Excavation teams disappeared. Federal recovery teams entered — most did
not return. Direct cause of Hunters Directorate formation. Current
status: officially sealed, unofficially active. Classification: Major
Historical Veil Incident.

### The Ashfall Experiments — 1983
Unauthorized Directorate black project. Attempted controlled interaction
with the Veil via experimental breach interface. Following activation:
communications failed, containment collapsed, portions of facility
ceased behaving consistently with physical space. Recovery teams
reported repeating corridors, faceless personnel, distorted radio.
Casualties: unknown — records erased. Facility status: LOST.
Responsible faction: The Architects. Classification: Directorate Black
Project.

### The Station 13 Incident — 1994
Location: Blackwater Transit Authority. Transit expansion crews
uncovered undocumented underground station absent from all records.
Workers disappeared. Station systems activated independently.
City-wide auditory hallucinations reported. Hunter Team Echo-4
deployed — only fragmented recordings recovered. Primary entity:
HH-013 The Conductor. The Red Platform — referenced in recovered
maps, no architectural records confirm existence. Classification:
Crimson-Level Veil Event.

## Master Timeline
- 1919 — [BLANK ENTRY — never filled in, not redacted]. Locked as the
  pre-1968 canon anchor date (creator decision, this version). No
  content assigned within Arc 1 by design; reserved for Arc 2.
- 1968 — Black Vein Collapse
- 1983 — Ashfall Experiments
- 1994 — Station 13 Incident

## Regional Progression
- Region 1: Rural Pennsylvania — starting region, grounded horror,
  low entity density
- Region 2: Industrial Ruins — collapsed infrastructure, mechanical
  anomalies
- Region 3: Forgotten Coast — maritime abandonment, water-based
  anomalies
- Region 4: The Veil — non-physical reality layer, endgame content

---

# Entity Roster — Established & Locked

## Entity File Format
Each entity contains: Classification / Threat Level / Status /
Manifestation Conditions / Known Behaviors / Environmental Effects /
Related Locations / Related Incidents / Hunter Notes / Gameplay
Mechanics / Video Concepts

## Threat Level Color System
Yellow (Common/low) → Orange (Rare/medium) → Red (Epic/high) →
Crimson (exceptional) → Obsidian (beyond classification)

## Established Entities (8 total)

**HH-013 — The Conductor** | Threat: Crimson | Transit-Bound Spectral.
Manifests in active rail systems. Mimics broadcasts. Related: Station 13.
"Do not board the final train."

**HH-014 — The Hollow Boy** | Common | Yellow | Residual Apparition.
Silhouette in doorways. Flees toward dark areas.

**HH-015 — The Burial Dog** | Common | Yellow | Territorial Specter.
Patrols burial sites. Does not cross into structures.

**HH-016 — The Miner's Echo** | Rare | Orange | Trauma-Bound Remnant.
Sound-sensitive death-loop apparition. Related: Black Vein Collapse.

**HH-017 — The Briar Witch** | Rare | Orange | Territorial Nature
Aberration. Never fully visible. Disables navigation equipment.

**HH-019 — The Lantern Warden** | Epic | Red | Threshold Guardian
Specter. Suppresses other entity activity. HELD FOR ARC 2 — does not
appear in Arc 1 videos.

**HH-020 — The Hollow King** | Legendary | Obsidian | Veil-Emergent
Apex Entity. Cannot be captured — documentation only. Related: Black
Vein, Ashfall.

**HH-021 — The First Phantom** | Legendary | Obsidian (beyond
classification) | Origin-Class Veil Entity. CRITICAL: Never depicted
visually. Ever. In any form. The central ARG mystery of the entire
channel. Related: Ashfall, Station 13 (oblique references only).

---

# Long-Form Strategy — Established & Locked

## Content Pillars
1. Incident Reports — historical Directorate incident breakdowns
2. Entity Files — classified entity dossiers as leaked records
3. Recovered Logs — audio/video recordings from failed operations
4. Directorate Intelligence — internal memos, faction communications
5. The First Phantom Thread — passive ARG seeded across all videos

## The ARG Layer
Each long-form video contains exactly one hidden reference to The
First Phantom. Never highlighted. Never explained. Accumulates across
videos into a larger picture. Community discovers and documents
organically. Never confirm or deny ARG elements in comments. Full
seed map is in the Series Arc Map document.

## Release Strategy
- Do not launch empty — have Video 01 + several short-form clips
  ready before going public
- Do not announce the launch — channel simply appears
- Long-form release cadence: one video every 3–6 weeks (quality over
  schedule)
- Short-form release cadence: 2–4 clips per week
- Best long-form upload days: Tuesday, Wednesday, Thursday
- Best upload time: 3–6 PM Eastern
- Community Posts used between long-form uploads — always in-world
- Archivist never responds to comments
- Pinned comment set within 1 hour of each long-form upload —
  always in-world

## Launch Sequencing (Long Form vs Short Form)
1. Produce Video 01 (long form) and 2-3 short form clips referencing
   ONLY what Video 01 establishes
2. Publish Video 01 first — establishes the channel has a real world
   behind it
3. Within days, begin publishing short-form clips
4. As later long-form videos release, short-form clips referencing
   that specific lore can follow
5. Short form must never get ahead of long-form canon

## Monetization Path
1. YouTube Partner Program (target: eligible by Video 06–07)
2. Patreon — "Clearance Level" tiers (launch after Video 05)
3. Merch — Directorate document prints, classification stamps,
   field operative ID cards
4. Game integration — channel as primary game marketing
5. Licensing — companion podcast, audio drama, tabletop potential
6. Short-form RPM is minimal — treat as top-of-funnel only, not a
   revenue source

---

# Arc 1 — The Opened File (13 Long-Form Videos)

## Arc Premise
Someone inside the Directorate is leaking materials. Leaks begin
small. A pattern emerges. Every incident, every entity, every log
points toward something buried deeper than anything else. By end
of Arc 1: audience knows it exists. They do not know what it is.

## Arc Payoff (Video 13)
Single leaked document — File Zero — almost entirely redacted. One
line unredacted: "It was here before the first breach." Channel
goes silent for 2–4 weeks after this upload.

## Video Roster

| # | Title | Pillar | Runtime | Complexity |
|---|-------|--------|---------|------------|
| 01 | The Veil Explained | World Intro | 6–7 min | 3/5 |
| 02 | HH-013: The Conductor | Entity File | 6–8 min | 3/5 |
| 03 | The Black Vein Collapse | Incident Report | 7–8 min | 3/5 |
| 04 | HH-016: The Miner's Echo | Entity File | 6–7 min | 2/5 |
| 05 | The Ashfall Experiments | Incident Report | 6–7 min | 4/5 |
| 06 | Station 13: The Full Incident | Incident Report | 7–8 min | 3/5 |
| 07 | The Hollow King | Entity File | 6–7 min | 3/5 |
| 08 | The Wardens | Directorate Intel | 6–7 min | 2/5 |
| 09 | The Architects | Directorate Intel | 6–7 min | 2/5 |
| 10 | The Threshold Initiative | Directorate Intel | 6–7 min | 2/5 |
| 11 | Recovered Log: Echo-4 | Recovered Log | 6–8 min | 5/5 |
| 12 | The Timeline Has a Gap | Intel / ARG | 6–7 min | 2/5 |
| 13 | File Zero | ARG Payoff | 4–6 min | 3/5 |

## Word Count Target Per Video
100–120 words per minute narration pace.
6 min = ~650 words | 7 min = ~750 words | 8 min = ~900 words

## NOTE ON VISUAL PRODUCTION FOR LONG FORM
Video 01 script (v2.0) was written with DaVinci Resolve references in
the production checklist. These references should be read as CapCut
(the confirmed editing tool). All overlay, color grade, and assembly
steps are achievable in CapCut. Midjourney images in Video 01 should
be regenerated using painterly illustration prompts — the original
images were generated photorealistic and are incorrect for the confirmed
aesthetic direction. Updated Midjourney prompt language is in the Visual
Style Guide.

---

# Short Form Content System — Established & Locked

## Purpose
Runs parallel to long-form Video Pipeline. Does not replace Arc 1.
Feeds it. Short form clips are "field evidence" — fragments pointing
toward long-form payoffs, not standalone horror content.

## Short Form Formats (6 total — finalized in v2.0)

**1. Animated Entity Reveal**
Midjourney entity image animated via Runway ML. Entity barely visible —
silhouette/suggestion only. Single classification line as text overlay.
Hard cut before full reveal.

**2. Animated Location Reveal**
Midjourney location image animated via Runway ML. Pure environmental
dread — no entities, no people. Archivist annotation as text overlay.
Establishes canon locations before their long-form video releases.

**3. Animated Document Reveal**
Midjourney document image animated via Runway ML. Key text visible
but not fully readable. ElevenLabs narration reads ONE line then cuts.
Strong ARG seed delivery — community will pause and study document text.

**4. Illustrated Incident Fragment**
2–3 Midjourney images assembled in sequence in CapCut, each briefly
animated in Runway ML. ElevenLabs narration reads single paragraph
(50–70 words max). Richest lore-delivery format in the system.

**5. Classified Transmission**
Black screen only. ElevenLabs audio — intercepted Directorate comms,
heavily radio-processed. Text appears word by word in CapCut.
Lowest production barrier — no Midjourney or Runway ML needed.

## REMOVED (Do Not Reintroduce Without Explicit Request)
- Personal Field Log — HeyGen avatar format, removed with HeyGen
- Field Reporter / News Broadcast — HeyGen avatar format, removed
- Recovered Security Footage — found footage aesthetic, conflicts with
  painterly illustration direction
- Corrupted VHS Tape — found footage aesthetic, conflicts with direction
- Entity Sighting Clip — found footage aesthetic, conflicts with direction
- Unexplained Disappearance Report — partially removed; document version
  could be reintroduced as Animated Document Reveal variant if needed
- Emergency Broadcast Fragment, Dispatch/Comms Audio, Distorted
  Transmission — removed in v2.0, still removed

## Canon Connections Map
Full short-to-long-form mapping exists in the Short Form Content
System document (media/shorts/short_form_content_system.md).
Covers all 13 long-form videos with corresponding short-form concepts
and formats.

## Production Workflow Per Short
1. Select format + canon connection
2. Write concept (1-2 sentences: what's seen/heard, what question raised)
3. Avatar-driven formats: script + generate in HeyGen (consistent avatar)
4. B-roll driven formats: generate atmospheric footage (HeyGen) or
   stills (Midjourney)
5. Layer additional audio if needed (ElevenLabs)
6. Assemble + degradation/overlay treatment in CapCut
7. Minimal directional caption only
8. Export vertical (9:16), post to both platforms

## What Short Form Never Does
- Never fully explains an entity, incident, or organization
- Never shows a Legendary entity clearly — implication only
- Never depicts The First Phantom in any form
- Never breaks the found-footage conceit with creator commentary
- Never gets ahead of long-form canon
- Never uses jump scares as primary tension mechanism
- Never lets the HeyGen avatar feel generic — consistent character,
  wardrobe, framing required across appearances

---

# Scripts Completed So Far

## Long Form
**Video 01 — The Veil Explained** (v2.0, with image placements)
Location: media/scripts/script_v01_the_veil_explained.md
Status: Complete, ready for production. Includes 3 Midjourney image
prompts, full production checklist, pinned comment, description copy,
title options.

## Short Form
**Launch Batch 01 v2.0** — 2 scripts revised to match painterly illustration
aesthetic. Original HeyGen-dependent scripts (Personal Field Log, Field
Reporter) replaced entirely.

1. **"Breach Confirmed"** — Classified Transmission format. Intercepted
   Directorate comms. Two voices (dispatcher + field operative). Pure
   ElevenLabs + CapCut — no image generation needed. First pipeline test.
   No First Phantom seed (establishing short). Connects to Video 01.

2. **"HH-014"** — Animated Entity Reveal format. The Hollow Boy silhouette
   in abandoned farmhouse doorway. First full Midjourney → Runway ML → CapCut
   pipeline test. No First Phantom seed (establishing short). Connects to
   Video 01 world without requiring a specific incident.

Location: media/shorts/shorts_launch_batch_01.md
Status: Complete v2.0, ready for production.

---

# Completed Documents — Repository Location

All documents should be committed to the GitHub repo:
github.com/matthewray-pgh/HauntedHunters
Note: Find/replace of "Haunted Hunters" → "Obsidian Frequency" for
channel-specific references already completed by creator in repo.

| Document | Repo Path | Status |
|----------|-----------|--------|
| Content Bible | docs/content-bible.md | Complete |
| Series Arc Map | docs/series-arc-map.md | Complete (13-video roster, synced to Video Pipeline) |
| Video Pipeline v2.0 | media/youtube/arc-1-opened-file/video-pipeline.md | Complete (13 videos, current, source of truth) |
| Release Strategy | media/youtube/arc-1-opened-file/release-strategy.md | Complete |
| Arc 1 Content Inventory | media/youtube/arc-1-opened-file/arc-1-content-inventory.md | Complete (13-video roster) |
| First Phantom Seed Map | media/youtube/arc-1-opened-file/first-phantom-thread-seed-map.md | Complete (13-video roster) |
| Visual Style Guide + Midjourney Prompts | docs/visual-style-guide.md | Complete, brand sheet regeneration not yet executed |
| Video 01 Script v2.0 | media/scripts/script_v01_the_veil_explained.md | Complete |
| Video 01 Storyboard | media/storyboard/storyboard_v01_the_veil_explained.md | Complete — last storyboard produced, see decision below |
| Video 02 Script | media/scripts/script_v02_the_conductor.md | Complete, no storyboard (decision below) |
| Video 03 Script | media/scripts/script_v03_black_vein_collapse.md | Complete, no storyboard (decision below) |
| Video 04 Script | media/scripts/script_v04_miners_echo.md | Complete, no storyboard (decision below) |
| Video 05 Script | media/scripts/script_v05_ashfall_experiments.md | Complete, no storyboard (decision below) |
| Video 06 Script | media/scripts/script_v06_station_13.md | Complete, no storyboard (decision below) |
| Video 07 Script | media/scripts/script_v07_hollow_king.md | Complete, no storyboard (decision below) |
| Video 08 Script | media/scripts/script_v08_the_wardens.md | Complete, no storyboard (decision below) — defines locked shared-signatory spec for V09/V10 |
| Video 09 Script | media/scripts/script_v09_the_architects.md | Complete, no storyboard (decision below) — signatory seed 2nd of 3, must match V08 exactly |
| Video 10 Script | media/scripts/script_v10_threshold_initiative.md | Complete, no storyboard (decision below) — signatory seed 3rd/final appearance, closes the shared-founder thread, no explicit reveal line |
| Video 11 Script | media/scripts/script_v11_echo4_recovered_log.md | Complete, no storyboard (decision below) — pure recovered log format, no Archivist narration in body, breakout-candidate video |
| Video 12 Script | media/scripts/script_v12_timeline_gap.md | Complete, no storyboard (decision below) — pre-1968 canon date locked to 1919 |
| Video 13 Script | media/scripts/script_v13_file_zero.md | Complete, no storyboard (decision below) — Arc 1 finale, ALL 13 SCRIPTS NOW COMPLETE |
| Shorts Batch 02 (Sep 1-7) | media/shorts/shorts_batch_02_sep01-07.md | Complete — full production scripts, 2 shorts |
| Shorts Batch 03 (Sep 8-14) | media/shorts/shorts_batch_03_sep08-14.md | Complete — full production scripts, 3 shorts |
| Shorts Batch 04 (Sep 15-21) | media/shorts/shorts_batch_04_sep15-21.md | Complete — full production scripts, 3 shorts |
| Shorts Batch 05 (Sep 22-28) | media/shorts/shorts_batch_05_sep22-28.md | Complete — full production scripts, 3 shorts |
| Shorts Batch 06 (Sep 29-Oct 5) | media/shorts/shorts_batch_06_sep29-oct05.md | Complete — full production scripts, 4 shorts |
| Shorts Batch 07 (Oct 6-12) | media/shorts/shorts_batch_07_oct06-12.md | Complete — full production scripts, 4 shorts |
| Shorts Batch 08 (Oct 13-19) | media/shorts/shorts_batch_08_oct13-19.md | Complete — full production scripts, 4 shorts |
| Shorts Batch 09 (Oct 20-24) | media/shorts/shorts_batch_09_oct20-24.md | Complete — full production scripts, 4 shorts |
| Shorts Batch 10 (Oct 25-31) | media/shorts/shorts_batch_10_oct25-31.md | Complete — full production scripts, 6 shorts + Oct 31 Community Post handling |
| Short Form Content System v3.0 | media/shorts/short_form_content_system.md | Complete |
| Shorts Launch Batch 01 | media/shorts/shorts_launch_batch_01.md | Complete |
| Entity Roster (8 entities) | canon/entities/ (HH-013 through HH-021, no HH-018) | Complete |
| Halloween 2026 Release Calendar | media/youtube/arc-1-opened-file/halloween-2026-release-calendar.md | Complete — dated source of truth for the Aug 25-Nov 17 active push |
| This Handoff Document | docs/ai-agent-handoff.md | v3.6 (this version) |

## Decision (Locked, v3.2) — Storyboards Discontinued After Video 01

Standalone storyboard documents (scene-by-scene timecodes + CapCut layer
stack, as seen in `storyboard_v01_the_veil_explained.md`) are **no longer
produced for Video 02 onward**, effective this version. Reasoning:

- At the Halloween-push weekly long-form cadence (see
  `halloween-2026-release-calendar.md`), scripting capacity is the
  production bottleneck, not CapCut assembly clarity.
- The script format itself (see Video 02-04) already carries most of what
  the storyboard added — Production Notes, Visual Approach, transition
  rules, and a full Production Checklist with audio levels and hold
  timings. The remaining gap (explicit per-scene timecodes and an explicit
  layer-stack map) matters most on higher-complexity, multi-visual-system
  videos and is optional there, not a default requirement.
- Videos 02 and 03 were already produced without a storyboard being
  written before this decision was formalized — this entry retroactively
  documents that as intentional, not an oversight.

If a specific future video (complexity 4-5/5, several interleaving visual
systems) would clearly benefit from a full storyboard, it can still be
written case-by-case — this is not a hard ban, just a change to the
default.

## Previously Flagged Inconsistency — Now Resolved
As of v3.1, the Series Arc Map, Arc 1 Content Inventory, and First Phantom
Seed Map have all been revised to match Video Pipeline v2.0's 13-video
roster (faction split into 3 videos, Miner's Echo added as Video 04).
Video Pipeline v2.0 remains the source of truth for arc structure; the
other documents now index it correctly instead of duplicating stale data.

---

# Open Questions — Requires Creator Decision

## Critical (Blocks Production)
1. **Cold blue-grey redaction color** — needed for the shared signatory
   seed appearing in Videos 08, 09, and 10 (`script_v08_the_wardens.md`
   defines the spec, suggested value `#5A6470`). Must be confirmed and
   added to `docs/visual-style-guide.md` — this has now shipped in three
   scripts (08, 09, 10) using the suggested value; confirm or revise
   before final asset production.
2. **Orange classification color** — needed for Video 04
   (`script_v04_miners_echo.md`). Same open item as before, now blocking
   two videos' worth of document design instead of one.

## Important
2. **Brand sheet regeneration** — Midjourney prompts exist in Visual
   Style Guide but have not been run/executed yet.
3. **Arc 2 title and central question** — "The Record Before Records"
   is a working title only, not developed further.
4. **Patreon launch timing/structure** — designed conceptually
   (Clearance Level tiers) but not finalized.
5. **Recurring Hunter avatar — visual lock** — described in Short 01
   script but actual HeyGen avatar has not been generated/selected yet.

## Resolved — Do Not Reopen
- Channel name: Obsidian Frequency (locked, multiple alternatives
  already tried and rejected)
- Production stack: Midjourney, Runway ML, ElevenLabs, CapCut (locked,
  replaces DaVinci Resolve/Runway ML/Audacity entirely)
- Release cadence: quality over schedule, long-form 3-6 weeks,
  short-form 2-4/week (locked)
- Arc 1 video count: 13 (locked)
- Video runtime: 6–8 minutes long form, format-specific for short form
  (locked)
- Entity additions: Miner's Echo added to Arc 1, Lantern Warden held
  for Arc 2 (locked)
- Faction split: three separate videos instead of one (locked)
- Brand colors, typography, brand mark (locked — only imagery needs
  regeneration)
- The First Phantom: never depicted visually, ever (locked)
- Short form formats: 6 finalized formats, audio-only formats removed
  (locked)
- Long form vs short form launch sequencing: long form first by a few
  days, then short form follows (locked)
- Series Arc Map, Arc 1 Content Inventory, and First Phantom Seed Map
  now match Video Pipeline v2.0's 13-video roster (locked, v3.1)
- Hunter Roles: 5 classes — Investigator, Exorcist, Mechanic,
  Cryptozoologist, Medium — synced across PRD, Video 01 script, and
  Video 01 storyboard (locked, v3.1)
- Entity roster: 8 established entities (HH-013 through HH-021, no
  HH-018). "Carapax Prawn" was never a real canon file and has been
  removed from this document (locked, v3.1)
- Directorate founding date: 1968, confirmed everywhere including
  Release Strategy's pinned-comment example, which previously said
  "the following year" (locked, v3.1)
- Headquarters rooms: 7-room canonical roster in
  gameplay/systems/headquarters-system.md — Operations Center,
  Research Lab, Armory, Containment Wing (MVP), plus Archive, Ritual
  Chamber, Trophy Hall (post-MVP). PRD-v0.1 now lists the same seven,
  flagged by MVP status (locked, v3.1)
- Brand palette: Crimson / Alert `#7A2E2E` added as a seventh locked
  color, for Crimson-level incidents and Epic-threat accents (locked,
  v3.1)

---

# Repo Structure Reference

```
HauntedHunters/
├── canon/
│   ├── directorate/
│   ├── entities/           (HH-013 .. HH-021, no HH-018 — 8 files)
│   ├── incidents/
│   ├── timeline/
│   └── world/
├── docs/
│   ├── content-bible.md
│   ├── series-arc-map.md
│   ├── visual-style-guide.md
│   ├── ai-agent-handoff.md (this file)
│   ├── creative-direction/
│   └── project/
│       ├── PRD-v0.1.md
│       └── expenses/
├── gameplay/
│   └── systems/
│       ├── headquarters-system.md
│       ├── hunters-system.md
│       ├── creature-collection-system.md
│       ├── expedition-system.md
│       └── seasonal-events.md
├── media/
│   ├── scripts/
│   │   └── script_v01_the_veil_explained.md
│   ├── storyboard/
│   │   └── storyboard_v01_the_veil_explained.md
│   ├── shorts/
│   │   ├── short_form_content_system.md
│   │   └── shorts_launch_batch_01.md
│   └── youtube/
│       └── arc-1-opened-file/
│           ├── README.md
│           ├── video-pipeline.md (source of truth for arc structure)
│           ├── release-strategy.md
│           ├── arc-1-overview.md
│           ├── arc-1-content-inventory.md
│           ├── first-phantom-thread-seed-map.md
│           ├── what-arc-1-establishes.md
│           └── arc-2-setup-preview.md
├── ideas/
├── prompts/
└── templates/
```

---

# How to Continue This Project

## If the creator wants to write more short-form scripts:
Use the Canon Connections map in the Short Form Content System
document. Confirm which long-form video the short connects to and
whether that video has been produced/released yet (short form should
not get ahead of long-form release). Reuse the locked Hunter avatar
for any Personal Field Log entries.

## If the creator wants to write the next long-form script (Video 02):
The Conductor — audio-driven, VHS surveillance aesthetic. Key beats:
entity file read, Station 13 seeded not explained, Echo-4 referenced
but fate withheld, phantom train sound motif established. First
Phantom seed: one line crossed out in ink on classification document.
Note: confirm whether CapCut workflow needs any script adjustments
from the DaVinci Resolve-oriented production notes used in Video 01.

## If the creator wants to resolve open questions:
Prioritize the pre-1968 date — it's the only true production blocker
remaining. Everything else can be resolved opportunistically.

## If the creator wants to develop more entities:
8 entities established. Template exists. Lantern Warden is ready for
Arc 2, needs video concepts only. New entity batches should follow
industrial/transit/coastal themes to match regional progression.

## If the creator wants to work on the game:
Full PRD exists in repo. MVP scope defined. Core systems: HQ, Hunter,
Monster, Investigation, Expedition, Combat, Capture, Equipment,
Locations, Resources, Progression. Engine: Unity / C#. Art: top-down
pixel art, 32x32. The channel and game share the same universe — keep
lore consistent.

## General Guidance
- Always check established canon before adding new lore
- The First Phantom is never depicted, explained, or confirmed beyond
  File Zero
- The pre-1968 date must be chosen before Video 12 production
- The Archivist voice never breaks — stay in-world at all times
- The recurring Hunter avatar's appearance must stay consistent once locked
- Every new entity must pass the design rule test (reinforce at least
  one aesthetic pillar)
- Always check this document's "Known Inconsistency" and "Open
  Questions" sections before assuming any document is fully current
