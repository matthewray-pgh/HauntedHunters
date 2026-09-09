# Obsidian Frequency — Short Form Scripts
## Batch 02 — Week of Sep 1–7 (2 shorts, V02 live Tue Sep 1)

Dates and hooks sourced from `media/youtube/arc-1-opened-file/halloween-2026-release-calendar.md`.
See that file for the full dated list and house rules on canon timing.

---

# SHORT 03 — Animated Entity Reveal
## "The Conductor — Station Platform"

### Format
Animated Entity Reveal

### Date
Thursday, September 3, 2026

### Runtime Target
12–18 seconds

### Connects To
Video 02 (HH-013: The Conductor) — live this week, full reveal now safe.

---

### Production Notes

**Midjourney Image Generation**
Reuses V02's Image 01 visual description, regenerated at vertical aspect
ratio for shorts (the original is `--ar 3:4` for a document insert; this
needs `--ar 9:16`):

```
transit conductor silhouette made of static and shadow, standing on an empty
subway platform, form partially dissolving into television static and signal
noise at the edges, no distinct facial features, suggestion of a uniform
and cap through darkness rather than clear detail, fluorescent platform
lighting flickering, teal and sickly green color palette with faint amber
flicker, painterly dark illustration, concept art style, highly detailed
brushwork, textured paint surface visible, cinematic dark fantasy illustration,
in the style of a dark graphic novel cover, paranormal entity documentation
aesthetic, deep shadow, nothing fully resolved, dread through implication
--ar 9:16 --style raw --stylize 800
```

Generate 4 variations. Select the one where the figure is least defined
and the platform depth reads most clearly in a vertical crop.

**Runway ML Animation**
- Motion: fluorescent light flicker, faint static texture drifting across
  the figure's edges
- Speed: slow, continuous — no camera push
- Duration: 8–10 seconds
- Do NOT add: figure movement, platform camera motion

**ElevenLabs Audio**
No narration. Audio only:
- Distant rail hum (transit ambient, same character as V02's base layer)
- Occasional electrical crackle timed to the flicker
- Complete silence in the final 2 seconds before cut

**CapCut Assembly**
- Runway ML clip plays
- Entity classification text fades in at 4 seconds:
  HH-013 / CLASSIFICATION: CRIMSON / STATUS: ACTIVE
- Text holds 3 seconds
- Hard cut to black
- Silence

### On-Screen Text (CapCut)
```
HH-013
CLASSIFICATION: CRIMSON
STATUS: ACTIVE
```
Pale off-white (#DCE6D6). Raleway Condensed font.

### Caption (Platform Text)
```
entity file HH-013. active since 1994. full file: obsidianfrequency

#ObsidianFrequency #AnalogHorror #ParanormalLore #fyp
```

### Pinned Comment
```
ENTITY HH-013 — THE CONDUCTOR
THREAT LEVEL: CRIMSON
LAST CONFIRMED: STATION 13, SECTOR 7
HUNTER TEAM ECHO-4: UNACCOUNTED
```

---

# SHORT 04 (REVISED) — Surveillance Fragment
## "The Last Train"

**This replaces the original Short 04 concept ("It Mimics the Broadcast")
documented in `shorts_batch_02_sep01-07.md`.** That version is not used —
this script should overwrite it in the batch file.

---

### Format
**Surveillance Fragment** — new sub-format, first use in short-form.
Extends V02's own long-form [SURVEILLANCE INSERT] visual system
(recovered VHS security footage, monochrome-green grade, tracking
jitter, timestamp burn-in) down into a standalone short for the first
time. Distinct from Animated Entity Reveal — there is no entity shown at
all, which is itself the point.

### Date
Sunday, September 6, 2026 (unchanged from original Short 04 slot)

### Runtime Target
15–20 seconds

### Connects To
Video 02 (HH-013: The Conductor) — direct visualization of the Hunter
Note *"Do not board the final train,"* which has been sitting unexplained
in Video 02's pinned comment and description since Sep 1. This is not
new information about the entity — it's the payoff of a warning
already published.

**Production complexity note:** this is the first short in the arc that
requires an actual human figure with visible motion (boarding, sitting,
looking at a phone) rather than a static or minimally-animated image.
Every prior short has deliberately avoided animating figures. Budget
extra time for this one, and see Runway notes below for how to keep it
consistent with house restraint despite the added motion.

---

### Production Notes

**Midjourney Image Generation**

Base plate — empty train interior, CCTV angle, before the passenger is
composited/animated in:

```
CCTV security camera view from upper corner of a subway train interior,
wide-angle fisheye-adjacent framing, rows of empty seats, handrails,
fluorescent overhead lighting slightly too bright and clinical,
monochrome-green surveillance color grade, persistent horizontal tracking
jitter, timestamp burn-in aesthetic in corner, grainy low-resolution
security footage quality, doors visible at one end of frame, static
institutional transit interior, painterly dark illustration treated to
look like degraded analog surveillance footage, cinematic dread through
ordinariness, no people yet
--ar 9:16 --style raw --stylize 700
```

Generate 3–4 variations, select the one where the doors read clearly in
frame and there's enough empty seat space for a single seated figure to
read as alone.

**Passenger and motion — handle in Runway ML, not Midjourney:**
- Passenger boards, sits, looks down at phone. Keep this motion
  minimal and mundane — no distinct facial detail needed or wanted,
  CCTV resolution should do that work for you. This is the one deliberate
  exception to the "no figure movement" house rule; keep the motion as
  plain and unremarkable as real CCTV footage would be, not stylized.
- Doors chime and begin to close (visual + implied sound cue)
- **At the moment doors are mid-close:** hard signal glitch — tracking
  error, static burst, brief total signal loss. Duration: 0.5–1 second,
  matching V02's own glitch-cut convention (never a dissolve).
- Feed clears. Train interior empty. Doors now fully closed. Train may
  be just beginning to pull away, or already gone — keep ambiguous.
- **Final frame holds on the phone, screen still lit, on the floor
  where the passenger's feet were.** No other disturbance — seat
  undisturbed, nothing else out of place. This is the last thing the
  viewer sees before cut to black.

**Runway ML Animation**
- Total duration: 15–18 seconds, structured roughly as:
  - 0–8s: passenger boards, sits, looks at phone (long, uneventful,
    deliberately close to boring)
  - 8–10s: doors chime, begin closing
  - 10–11s: signal glitch (static, tracking error, brief full dropout)
  - 11–15s: feed clears, empty train, phone visible on floor, hold
- Camera does not move at any point — locked-off CCTV angle for the
  entire clip, consistent with the house rule that the highest-impact
  entity moments use zero camera motion (see Video 07's Hollow King
  treatment)
- Tracking jitter should be present at low intensity throughout, not
  just during the glitch — this is recovered footage, it should never
  look clean
- Do NOT show any figure, shape, or motion during or after the glitch
  beyond the empty train and the phone. No arms, no silhouette, no
  suggestion of anything present. The absence is the entire scare.

**ElevenLabs Audio**
No narration — this short carries no Archivist voice at all, a first for
the arc. Audio is entirely diegetic:
- Ambient transit interior hum, continuous, low
- Door chime at the appropriate moment (standard transit door tone,
  slightly degraded/tape-worn to match the surveillance aesthetic)
- At the glitch: audio drops out completely with the video for its
  duration — total silence, not a static/noise sound effect
- Audio resumes at normal ambient level the instant the feed clears —
  no swell, no stinger, no music cue of any kind. The mundanity of the
  sound continuing exactly as before is the effect.

**CapCut Assembly**
- Runway clip plays start to finish, uncut
- Timestamp burn-in overlay, bottom left, degraded/partially illegible
  characters, consistent with V02's `ST-13 CAM 0_ — 03:1_:07` style —
  generate a similar corrupted timestamp unique to this clip
- No text overlay at any point during the clip itself
- Hold on the final frame (phone on floor) for a full 2–3 seconds before
  cut to black — longer than the rest of the shot list would suggest,
  deliberately giving the detail time to register
- Hard cut to black. No fade.

### On-Screen Text
None. This is a deliberate departure from most shorts in the arc, which
use at least a closing text line — here, the visual alone (empty train +
lit phone) is the entire message. Trust it.

### Caption (Platform Text)
```
station 13. no additional information available.

#ObsidianFrequency #AnalogHorror #ParanormalLore #fyp
```

Deliberately does not reference HH-013, the Conductor, "the last train,"
or Video 02 by name — let viewers who've watched Video 02 make the
connection to the Hunter Note themselves. This matches the arc's
existing rule against explaining a seed in its own caption.

### Pinned Comment
None — same reasoning as the original Short 04 concept: this short
rewards rewatching and noticing the phone, not being told what happened
in the comments.

---

## Recommended Canon Update (optional, not yet applied)

To keep this consistent as established behavior rather than a one-off,
consider adding to `canon/entities/HH-013-the-conductor.md` under Known
Behaviors:

```
- Removes passengers who board during an active manifestation window;
  no physical evidence of the event is recorded on any surviving footage
```

This keeps the entity's power framed as "interferes with the record,"
consistent with its existing "distorts electronic communication" and
"mimics transit broadcasts" behaviors, rather than introducing an
unrelated physical-contact ability. Flagging as optional since it's a
canon file edit, not just a short's script — your call whether to lock
this in now or wait and see how the short is received first.