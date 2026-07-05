# Obsidian Frequency — Asset Sourcing Guide
## Where to Find Every Recurring Production Asset

---

# Purpose

This guide lists exact search terms and recommended sources for every
recurring visual and audio asset used across Arc 1 long-form videos and
short-form content. Source these once, build a personal asset library,
and reuse across multiple videos rather than re-sourcing every time.

---

# Video Overlays

## CRT Scan Line Overlay
**What it is:** Animated horizontal scan lines over a black/transparent
background. Used on nearly every long-form video.

**Where to find it:**
- Motion Array (motionarray.com) — search "CRT overlay free"
- Videezy (videezy.com) — search "VHS scan lines free" or "CRT overlay"
- YouTube — search "free CRT overlay no copyright" — many creators
  publish 10-minute loop files as free downloads

**CapCut application:** Video layer above footage, blend mode Screen,
opacity 15–25%, loop or stretch to video length.

---

## VHS Tracking Error / Signal Degradation Overlay
**What it is:** Horizontal jitter, color bleed, and tracking line glitches
simulating a damaged or worn VHS tape. Used for Video 05 (real-time
redaction effect), Video 11 (recovered log format), and any "older"
incident content.

**Where to find it:**
- Videezy — search "VHS glitch overlay free" or "tape damage overlay"
- Motion Array — search "VHS distortion free"
- Pexels Video (pexels.com/videos) — search "static noise" or "tv static"

**CapCut application:** Video layer, blend mode Screen or Add,
opacity varies by intent (10% for subtle, 40%+ for heavy degradation
moments like Video 05's redaction reveal).

---

## Film Grain / Archival Damage Filter
**What it is:** Fine grain texture and occasional dust/scratch marks
simulating aged film or photograph damage. Used on all Midjourney
images for archival consistency.

**Where to find it:**
- Videezy — search "film grain overlay free"
- CapCut's built-in effects library — search "Grain" or "Film" directly
  in the app, several free options exist natively
- Motion Array — search "old film grain free"

**CapCut application:** Apply as a built-in CapCut effect directly to
image clips, or as a separate overlay layer at low opacity (10–15%) for
more control.

---

## Static Burst / Signal Interruption
**What it is:** Brief, intense visual noise simulating a broadcast or
recording interruption. Used at transition points and for Classified
Transmission shorts.

**Where to find it:**
- Pexels Video — search "tv static" or "white noise screen"
- Videezy — search "static burst free"
- CapCut's built-in "Glitch" effects (in the Effects tab) work well for
  short, sharp interruptions without needing an external file

---

# Audio Assets

## Ambient Industrial Drone
**What it is:** Low, continuous, toneless atmospheric sound bed. Used
under nearly all long-form narration and many short-form clips.

**Where to find it:**
- Freesound.org — search "industrial drone," "dark ambient drone,"
  "underground ambience" — filter by Creative Commons license
- ElevenLabs Sound Effects (if plan includes it) — generate with prompt:
  "low industrial ambient drone, continuous, no melody, underground
  facility, subtle electrical hum, 2 minutes"

**CapCut application:** Audio track beneath narration, -18db, fade in
3-5 seconds at start, fade out 5 seconds at end, loop/duplicate to
cover full runtime.

---

## Electrical Hum Layer
**What it is:** Subtle fluorescent/electrical buzz suggesting a specific
indoor location without being identifiable.

**Where to find it:**
- Freesound.org — search "electrical hum loop" or "fluorescent light hum"

**CapCut application:** Second audio track at -24db, beneath drone.

---

## Mining Ambient (Video 03, Video 04)
**What it is:** Distant dripping water, structural creaks, deep cave
echo. Used for Black Vein Collapse and Miner's Echo videos — keep
consistent across both for continuity.

**Where to find it:**
- Freesound.org — search "cave ambience," "mine tunnel ambient,"
  "underground dripping water"

**CapCut application:** Same as industrial drone — -18db under narration.

---

## Transit / Subway Ambient (Video 02, Video 06, Video 11)
**What it is:** Echoing station ambience, distant mechanical sounds.
Used across all Conductor and Station 13 related content — keep
identical across all three videos for the recognizable motif effect.

**Where to find it:**
- Freesound.org — search "subway station ambience," "train tunnel echo"

---

## Phantom Train Approach Sound
**What it is:** A train sound that builds and approaches but never
arrives — cuts before resolution. This is a designed effect, not a
single found file.

**How to build it:**
1. Source a basic train approach sound from Freesound.org
   (search "train approaching distant")
2. In CapCut, apply a gradual volume increase (keyframe automation)
   over 5-8 seconds
3. Cut the audio abruptly at peak intensity — before the train would
   logically arrive
4. This same edited asset should be reused identically across Videos
   02, 06, and 11 for the conditioning effect described in the Video
   Pipeline document

---

## Deep Forest Ambient + Subsonic Drone (Video 07 — Hollow King)
**What it is:** Wind, distant movement, and a barely-audible low
frequency drone that rises through the video.

**Where to find it:**
- Freesound.org — search "deep forest night ambience" for the base layer
- For the subsonic element: search "subsonic drone" or "low frequency
  tone" — alternatively, ElevenLabs Sound Effects can generate this
  with prompt: "extremely low subsonic drone, barely audible, rising
  intensity, ominous, 1 minute"

**CapCut application:** Layer both — forest ambient at -16db, subsonic
drone starting inaudible and rising to just-perceptible by video midpoint
(use keyframe volume automation).

---

## Institutional Ambient (Videos 08, 09, 10, 12)
**What it is:** HVAC hum, distant office/filing sounds — bureaucratic
rather than horror-driven atmosphere. Used for faction videos and the
timeline video.

**Where to find it:**
- Freesound.org — search "office ambience HVAC," "building hum"

---

## Radio Static / Comms Crackle
**What it is:** Used for Classified Transmission shorts and Video 11's
Echo-4 recordings.

**Where to find it:**
- Freesound.org — search "radio static loop," "walkie talkie static"

**Voice processing note:** The actual dialogue/voice processing for
these formats happens in ElevenLabs (see Voice Processing section
below) — these static files are layered underneath the processed voice.

---

# Voice Processing (ElevenLabs)

## The Archivist Voice
**Target sound:** Tape recorder playback — slight wow and flutter,
subtle hiss, narrow frequency range. Not distorted, not robotic.

**How to achieve it in ElevenLabs:**
1. Generate the narration using a clear, measured voice setting first
2. Apply ElevenLabs' voice effects/processing options for "vintage
   recording" or "telephone/radio" style filters if available in your
   plan tier
3. If ElevenLabs doesn't have a built-in degradation filter sufficient
   for the effect, export the clean narration and apply additional
   processing in CapCut using its audio EQ tools — cut high and low
   frequencies to narrow the range, add a very subtle pitch wobble if
   CapCut's audio effects allow it

## Field Operative / Dispatcher Voices (Classified Transmission shorts)
**Target sound:** Heavier radio processing than the Archivist — narrow
frequency range, static bursts between lines, slight pitch instability.

**How to achieve it:**
Same ElevenLabs base process as above, but push the degradation further.
If available, ElevenLabs' "phone call" or "radio" preset processing is
ideal here. Layer the radio static audio file (sourced above) underneath
in CapCut for the final effect.

---

# Document Design Assets (Canva)

## Aged Paper Texture
**Where to find it:**
- Canva's built-in texture library — search "aged paper" or "old paper"
  directly within Canva, many free options exist natively
- Alternatively, generate via Midjourney using the Document Design
  Prompts in the Visual Style Guide (aged government document paper
  texture prompt)

## Classification Stamps
**Where to find it:**
- Generate via Midjourney using the Classification Stamp Texture prompt
  in the Visual Style Guide
- Alternatively, Canva has searchable "stamp" and "grunge stamp"
  elements that can be customized with your own text (CLASSIFIED,
  YELLOW, OBSIDIAN, etc.)

## Typewriter Font
**Where to find it:**
- Canva's font library includes several free typewriter-style fonts —
  search "typewriter" directly in the font search bar
- Recommended: "Courier Prime" or "Special Elite" if available in your
  Canva plan — both read as authentic vintage typewriter text

---

# Building Your Personal Asset Library

## Recommended Folder Structure (Local or Cloud Storage)
```
Obsidian Frequency Assets/
├── Video Overlays/
│   ├── CRT_scanlines_01.mp4
│   ├── VHS_tracking_01.mp4
│   ├── film_grain_01.mp4
│   └── static_burst_01.mp4
├── Audio - Ambient/
│   ├── industrial_drone_01.mp3
│   ├── electrical_hum_01.mp3
│   ├── mining_ambient_01.mp3
│   ├── transit_ambient_01.mp3
│   ├── forest_subsonic_01.mp3
│   └── institutional_ambient_01.mp3
├── Audio - Effects/
│   ├── phantom_train_EDITED.mp3
│   ├── radio_static_01.mp3
│   └── page_turn_01.mp3
├── Document Assets/
│   ├── aged_paper_texture_01.png
│   ├── classification_stamps/
│   └── fonts/
└── Generated Images/
    ├── Video_01/
    ├── Video_02/
    └── [continues per video]
```

## Why This Matters
Sourcing each asset once and storing it properly saves significant time
across 13 long-form videos and ongoing short-form content. Several
assets are explicitly designed for reuse (transit ambient, phantom train
sound, mining ambient) specifically to build audience recognition —
losing track of the original file breaks that continuity.

---

# Quick Reference Table

| Asset | Primary Source | CapCut Setting |
|-------|----------------|-----------------|
| CRT scan lines | Videezy / Motion Array | Screen blend, 15-25% opacity |
| VHS tracking/degradation | Videezy / Motion Array | Screen/Add blend, 10-40% opacity |
| Film grain | CapCut built-in effects | Native effect or 10-15% overlay |
| Static burst | Pexels Video / CapCut Glitch effect | Short duration, full opacity |
| Industrial drone | Freesound.org / ElevenLabs SFX | -18db audio track |
| Electrical hum | Freesound.org | -24db audio track |
| Mining ambient | Freesound.org | -18db, reuse V03 + V04 |
| Transit ambient | Freesound.org | -18db, reuse V02 + V06 + V11 |
| Phantom train | Freesound.org + manual edit | Keyframe volume, abrupt cut |
| Forest/subsonic | Freesound.org / ElevenLabs SFX | -16db ambient, rising subsonic |
| Institutional ambient | Freesound.org | -18db, reuse V08/09/10/12 |
| Radio static | Freesound.org | Layer under ElevenLabs voice |
| Aged paper texture | Canva native / Midjourney | Document background |
| Classification stamps | Midjourney / Canva elements | Document overlay |
| Typewriter font | Canva font library | Document body text |
