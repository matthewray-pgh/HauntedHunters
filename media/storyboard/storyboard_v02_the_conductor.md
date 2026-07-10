# OBSIDIAN FREQUENCY
## Video 02 — HH-013: The Conductor
### Complete Production Storyboard
### Reference Document for CapCut Assembly

---

# How to Read This Document

Each scene block contains:
- **SCENE** — scene number and name
- **TIMECODE** — approximate start time (adjust as your actual pacing dictates)
- **DURATION** — how long this scene runs
- **VISUAL** — what is on screen and how the camera/image moves
- **AUDIO** — what is heard, at what level
- **CAPCUT NOTES** — specific layer or effect instructions
- **NARRATION** — exact words spoken in this scene (if any)

---

# CapCut Layer Stack Reference

This video runs two distinct visual systems on the same stack — the
document system (Video 01 baseline) and the surveillance insert system
(new for this video). They never blend into each other; the stack below
notes which layers are active for each.

```
Layer 6 (TOP)   — Text overlays (pre-roll text, annotation card)
Layer 5         — VHS tracking jitter overlay (surveillance scenes only)
Layer 4         — CRT scan line overlay (document scenes only, Screen blend, 20%)
Layer 3         — Archival grain / film damage overlay (Screen, 10% opacity)
Layer 2         — Images (document, surveillance insert, full frame)
Layer 1 (BASE)  — Black background (solid color, full duration)

Audio Track 1   — Narration (-6db)
Audio Track 2   — Transit ambient (-18db)
Audio Track 3   — Electrical hum (-24db)
Audio Track 4   — Page turn / incidental sounds (-12db)
Audio Track 5   — Distorted PA announcement (scene-specific, see Scene 10)
Audio Track 6   — Phantom train approach (scene-specific, see Scene 10)
```

**Rule:** Layer 4 (CRT overlay) is ON for all document scenes and OFF for
surveillance insert scenes. Layer 5 (VHS tracking jitter) is the reverse —
OFF for document scenes, ON for surveillance scenes. Never run both at once;
the visual language of each system needs to stay legible as its own thing.

---

# SCENE 01 — BLACK OPEN
**Timecode:** 00:00
**Duration:** 5 seconds

**VISUAL**
Pure black screen. Nothing visible.

**AUDIO**
Complete silence. No transit hum yet. Dead air.

**CAPCUT NOTES**
- Layer 1: Black solid color clip, full width
- No other layers active yet
- Silence is intentional — do not add any audio here

**NARRATION**
None.

---

# SCENE 02 — PRE-ROLL TEXT
**Timecode:** 00:05
**Duration:** 4 seconds

**VISUAL**
Single line of pale off-white text (#DCE6D6) appears on black.
Typewriter font (Courier Prime or Special Elite).
Text appears one character at a time.

> *This entity is still active.*

Text holds for full four seconds then fades out over one second.

**AUDIO**
Still silence.

**CAPCUT NOTES**
- Layer 6: Text clip — CapCut typewriter text animation
- Font: Courier Prime or Special Elite
- Color: #DCE6D6
- Fade out: 1 second dissolve at end of this scene

**NARRATION**
None.

---

# SCENE 03 — CRT AND TRANSIT HUM FADE IN
**Timecode:** 00:09
**Duration:** 3 seconds (transition into Scene 04)

**VISUAL**
Black screen continues. CRT scan line overlay begins fading in — barely visible.

**AUDIO**
Transit hum begins fading in over 3 seconds — this is NOT the Video 01
industrial drone. Distant rail rhythm, half-heard. Start: inaudible.
End of scene: -18db.
Electrical hum begins simultaneously, reaches -24db by end of Scene 04.

**CAPCUT NOTES**
- Layer 4: CRT overlay clip begins — Screen blend, opacity keyframe 0% → 20%
- Audio Track 2: Transit hum clip begins — volume keyframe 0db → -18db
- Audio Track 3: Electrical hum begins — volume keyframe 0db → -24db

**NARRATION**
None.

---

# SCENE 04 — DOCUMENT OPEN
**Timecode:** 00:12
**Duration:** 6 seconds

**VISUAL**
HH-013 entity classification file fades in from black over 2 seconds.
Document fills frame — full 16:9. Static, no movement yet.

Document header visible:
```
HUNTERS DIRECTORATE
ENTITY CLASSIFICATION FILE
CLASSIFICATION: CRIMSON
DISTRIBUTION: CONTAINMENT DIVISION — RESTRICTED
FILE ID: HH-013
```

Classification stamp rendered in oxblood #7A2E2E.

**AUDIO**
Transit hum: -18db (held). Electrical hum: -24db (held). No narration yet.

**CAPCUT NOTES**
- Layer 2: Document image clip — Dissolve transition, 2 seconds
- Ken Burns: NO movement yet — static in this scene
- Layer 4: CRT overlay continues, 20% Screen
- Layer 3: Grain overlay begins, 10% Screen

**NARRATION**
None.

---

# SCENE 05 — NARRATION OPENS / SLOW PAN BEGINS
**Timecode:** 00:18
**Duration:** 12 seconds

**VISUAL**
Camera (Ken Burns) begins very slow downward pan across document.
Start: top of document (header visible).
End of this scene: approaching the crossed-out line beneath the Status field.

**AUDIO**
Transit hum: -18db. Electrical hum: -24db. Narration begins.

**CAPCUT NOTES**
- Layer 2: Document image — apply Ken Burns pan
  Set full pan duration to cover Scenes 05 through 14 (the entire
  document read), same principle as Video 01
- Narration clip begins Audio Track 1 at -6db

**NARRATION**
*"This is the first entity file in this archive.*

[BEAT — 2 seconds]

*It will not be the last.*

[BEAT — 2 seconds]

*But it is the one I keep coming back to."*

---

# SCENE 06 — THE CROSSED-OUT LINE
**Timecode:** 00:30
**Duration:** 4 seconds

**VISUAL**
Ken Burns pan continues at its normal, unhurried speed — this scene
gets NO special camera treatment. That is the point.
The crossed-out line beneath the Status field passes through frame as
part of the natural downward pan. It is filmed slightly out of focus —
apply a very subtle depth-of-field blur to this specific portion of the
document image in CapCut (a soft radial blur mask, barely perceptible),
enough that the crossed-out text reads as *a line* and nothing more.

**No narration accompanies this passage. No BEAT is written for it in
the script. The pan simply continues over it exactly as it would over
any other line on the page.**

**AUDIO**
Transit hum: -18db. Electrical hum: -24db. Silence in narration — this
falls in the gap between Scene 05's narration ending and Scene 07's
classification narration beginning. Do not fill it with an extra BEAT
cue; let the pan's natural pace carry the moment.

**CAPCUT NOTES**
- Layer 2: apply localized soft blur mask to the crossed-out line region
  only — do this as a mask keyframed to track with the Ken Burns pan
- **Do not** zoom in on this region. Do not slow the pan here. Do not
  add a sound cue. Any of these would turn a background detail into a
  callout, which breaks the First Phantom seed rule.
- QA note: view this scene on a phone-sized preview before finalizing —
  confirm the line reads as illegible at normal viewing distance, not
  as "an interesting blurry thing to pause on"

**NARRATION**
None.

---

# SCENE 07 — SECTION 1: CLASSIFICATION
**Timecode:** 00:34
**Duration:** 20 seconds

**VISUAL**
Ken Burns pan continues downward. Classification block comes into
frame — Crimson stamp visible. Camera slows very slightly as it
reaches the stamp itself.

**AUDIO**
Transit hum: -18db. Electrical hum: -24db. Narration — classification block.
Page turn sound (Audio Track 4, -12db) as camera reaches this section.

**CAPCUT NOTES**
- Ken Burns continues
- Page turn timed to section entry

**NARRATION**
*"Designation — HH-013.*

[BEAT — 2 seconds]

*Classification — Transit-Bound Spectral.*

[BEAT — 2 seconds]

*Threat level —*

[BEAT — 2 seconds]

*Crimson.*

[LONG BEAT — 4 seconds]

*Status — Active.*

[BEAT — 2 seconds]

*Not contained. Not neutralized.*

[BEAT — 2 seconds]

*Active."*

---

# SCENE 08 — SECTION 2: MANIFESTATION CONDITIONS
**Timecode:** 00:54
**Duration:** 20 seconds

**VISUAL**
Pan continues to manifestation conditions list. Three bullet points visible.

**AUDIO**
Transit hum: -18db. Electrical hum: -24db. Narration continues.
Page turn at section header.

**CAPCUT NOTES**
- Ken Burns continues
- Page turn at header

**NARRATION**
*"The file lists three conditions for manifestation.*

[BEAT — 2 seconds]

*Active rail systems.*

[BEAT — 2 seconds]

*Electrical interference.*

[BEAT — 2 seconds]

*Station announcements.*

[LONG BEAT — 4 seconds]

*Read that last one again.*

[BEAT — 2 seconds]

*Station announcements.*

[BEAT — 2 seconds]

*Not a location. A sound."*

---

# SCENE 09 — SECTION 3: KNOWN BEHAVIORS
**Timecode:** 01:14
**Duration:** 25 seconds

**VISUAL**
Pan continues to known behaviors section.

**AUDIO**
Transit hum: -18db. Electrical hum: -24db. Narration continues.
Page turn at section header.

**CAPCUT NOTES**
- Ken Burns continues
- Page turn at header

**NARRATION**
*"It mimics transit broadcasts.*

[BEAT — 2 seconds]

*It appears near powered tracks.*

[BEAT — 2 seconds]

*It distorts electronic communication.*

[LONG BEAT — 4 seconds]

*The file doesn't say it imitates the announcer.*

[BEAT — 2 seconds]

*It says it mimics the broadcast.*

[BEAT — 2 seconds]

*There's a difference. I don't think the file's authors noticed it.*

[BEAT — 2 seconds]

*I noticed it."*

---

# SCENE 10 — SECTION 4: ENVIRONMENTAL EFFECTS
**Timecode:** 01:39
**Duration:** 14 seconds

**VISUAL**
Pan continues to environmental effects section.

**AUDIO**
Transit hum: -18db. Electrical hum: -24db. Narration continues.
Page turn at section header.

**CAPCUT NOTES**
- Ken Burns continues, then PAUSES and FREEZES at end of scene —
  this freeze carries into Scene 11's surveillance insert

**NARRATION**
*"Flickering lights.*

[BEAT — 2 seconds]

*Phantom train sounds.*

[BEAT — 2 seconds]

*Hallucinated passengers."*

[LONG BEAT — 4 seconds, carries into Scene 11]

---

# SCENE 11 — SURVEILLANCE INSERT: IMAGE 01 (STATION 13 PLATFORM)
**Timecode:** 01:53
**Duration:** 20 seconds

**VISUAL**
**Hard glitch-cut** — not a dissolve. Document vanishes into a burst of
VHS tracking error (approx. 0.3–0.5 seconds of static/glitch) and the
recovered security footage still fills frame.

Monochrome-green surveillance grade. Fluorescent lighting flickering
irregularly. Far end of platform holds indistinct shapes at the edge
of resolution. Continuous tracking jitter runs across the whole frame.
**The shapes do not move when the jitter passes over them** — this is
a still frame with a moving degradation layer on top, not a video of
something happening. Static composition, no camera movement at all.

Timestamp burn-in, bottom left, 1–2 characters corrupted:
`ST-13 CAM 0_ — 03:1_:07`

Camera (i.e., the still image itself) holds completely fixed for the
full 20 seconds — no Ken Burns, no pan, no zoom. This is the one point
in the video where the "camera" cannot move, and that stillness should
feel wrong after ten scenes of slow document drift.

**AUDIO**
Transit hum: -18db. Electrical hum: -24db.
Add a short static burst SFX (-10db) exactly at the glitch-cut in and
glitch-cut out points — this sells the transition as tape damage rather
than an editing choice.

**CAPCUT NOTES**
- Layer 4 (CRT overlay): OFF for this scene
- Layer 5 (VHS tracking jitter): ON, animated, full opacity throughout
- Layer 2: Image 01 (surveillance still) — hard cut in, hard cut out,
  no dissolve keyframes at all
- Burn in timestamp as a static text layer, position bottom left,
  degrade 1–2 characters (partial opacity or corrupted glyph swap)
- Static burst SFX synced precisely to both glitch-cut frames

**NARRATION**
*[5 second hold before narration begins]*

*"This is the only surveillance frame that survived recovery.*

[BEAT — 2 seconds]

*Cross-reference the platform against ridership logs for that hour.*

[BEAT — 2 seconds]

*The logs show zero passengers present.*

[LONG BEAT — 4 seconds]

*The footage disagrees."*

---

# SCENE 12 — RETURN TO DOCUMENT
**Timecode:** 02:13
**Duration:** 3 seconds

**VISUAL**
Hard glitch-cut back to document — same static burst treatment as the
entry, in reverse. Document resumes exactly where it froze in Scene 10.
Ken Burns pan RESUMES.

**AUDIO**
Static burst SFX (-10db) at the cut point. Transit hum and electrical
hum continue underneath at target levels.

**CAPCUT NOTES**
- Layer 4 (CRT overlay): back ON
- Layer 5 (VHS tracking jitter): back OFF
- Ken Burns: resume from frozen position

**NARRATION**
None — silent transition beat.

---

# SCENE 13 — SECTION 5: RECOVERED AUDIO FRAGMENT (LEAD-IN)
**Timecode:** 02:16
**Duration:** 10 seconds

**VISUAL**
Document pan continues to an audio log reference tab, stapled to the page.
Camera holds on the tab — Ken Burns pauses here.

**AUDIO**
Transit hum: -18db. Electrical hum: -24db. Narration.

**CAPCUT NOTES**
- Ken Burns: pause on the stapled tab detail
- No page turn sound here — the tab is a physical attachment, not a
  new document page

**NARRATION**
*"One audio fragment was recovered alongside this file.*

[BEAT — 2 seconds]

*I am going to play part of it."*

[LONG BEAT — 4 seconds, carries into Scene 14]

---

# SCENE 14 — FULL FRAME: IMAGE 02 (RECOVERED AUDIO FRAGMENT)
**Timecode:** 02:26
**Duration:** 22 seconds

**VISUAL**
This is the only full-frame image break in the video — same house rule
as Video 01's Image 02.

Document fades out slowly over 3 seconds (slower than the surveillance
glitch-cuts — this is a document-system transition, treat it that way).

Image 02 fades in FULL FRAME. Near-black. A single dim shape implied at
the edge of visibility — station platform architecture, barely lit,
extending further than a platform should extend.

Image holds completely static through the entire scene. No movement.

**AUDIO — THE MOST IMPORTANT AUDIO MOMENT IN THIS VIDEO**
No narration during this scene. The distorted PA announcement plays in
full — degraded, pitched slightly wrong, words dragging into each
other, trailing into silence mid-sentence. Follow with 2 seconds of
dead air, then the phantom train approach sound: a train sound that
builds for 5–8 seconds and cuts abruptly at peak intensity, before it
would logically arrive.

This is the edited "phantom train" asset described in the Asset
Sourcing Guide — the same file gets reused identically in Videos 06
and 11. Do not re-edit it differently here; the repetition across
videos is the point.

**CAPCUT NOTES**
- Layer 2: Document — Dissolve OUT, 3 seconds
- Layer 2: Image 02 — Dissolve IN, 3 seconds, FULL FRAME
- Layer 4 (CRT): stays ON — this is a document-system full frame, not
  a surveillance insert. No glitch-cut, no tracking jitter here.
- Audio Track 5: Distorted PA announcement — full fragment, unmuted,
  no narration overlapping
- Audio Track 6: Phantom train approach — keyframed volume build over
  5–8 seconds, hard cut at peak
- Absolutely no narration clip active anywhere in this scene

**NARRATION**
None during the audio fragment itself.

---

# SCENE 15 — RETURN TO DOCUMENT / SECTION 5 CLOSE
**Timecode:** 02:48
**Duration:** 10 seconds

**VISUAL**
Image dissolves back to document over 3 seconds — document-style
dissolve, not a glitch-cut, since the audio fragment is being folded
back into the file rather than ending abruptly. Ken Burns resumes.

**AUDIO**
Transit hum: -18db. Electrical hum: -24db. Narration resumes.

**CAPCUT NOTES**
- Layer 2: Dissolve IN to document, 3 seconds
- Ken Burns: resume from frozen position

**NARRATION**
*"Directorate audio analysis could not identify the station name spoken
at the start of that recording.*

[BEAT — 2 seconds]

*It does not match any station on the current transit map."*

---

# SCENE 16 — SECTION 6: RELATED INCIDENTS
**Timecode:** 02:58
**Duration:** 25 seconds

**VISUAL**
Pan continues to related incidents field. One line visible:
`STATION 13 INCIDENT — 1994 — SEE CROSS-REFERENCE`
No further document detail. The reference sits alone on the page —
resist the temptation to add supporting imagery here.

**AUDIO**
Transit hum: -18db. Electrical hum: -24db. Narration. Page turn at header.

**CAPCUT NOTES**
- Ken Burns continues
- Page turn at section header
- No insert, no cutaway — the sparseness of this section IS the design

**NARRATION**
*"This entity is cross-referenced to a single incident.*

[BEAT — 2 seconds]

*Station 13. 1994.*

[BEAT — 2 seconds]

*I am not going to tell you what happened there.*

[LONG BEAT — 4 seconds]

*Not yet.*

[BEAT — 2 seconds]

*What I will tell you is that a Hunter team was deployed into that
incident.*

[BEAT — 2 seconds]

*Designation — Echo-4.*

[LONG BEAT — 4 seconds]

*Their deployment orders are in this archive.*

[BEAT — 2 seconds]

*Their outcome is not."*

---

# SCENE 17 — SECTION 7: HUNTER NOTES
**Timecode:** 03:23
**Duration:** 20 seconds

**VISUAL**
Pan continues to final document section — a handwritten annotation
block, visually distinct from the typed body and from the crossed-out
line seeded in Scene 06 (different hand, fully legible, no blur).
This reaches the bottom of the document; Ken Burns pan ends here and
holds static for the remainder of the read.

**AUDIO**
Transit hum: -18db. Electrical hum: -24db. Narration — the longest
pauses in the video happen here. Honor them fully.

**CAPCUT NOTES**
- Ken Burns: reaches bottom of document, ends movement, static hold
- No page turn — this is the same page, a handwritten addition to it

**NARRATION**
*"There is one handwritten note in this file.*

[BEAT — 2 seconds]

*Unsigned.*

[LONG BEAT — 4 seconds]

*'Do not board the final train.'*

[LONG BEAT — 4 seconds]

*I don't know who wrote it.*

[BEAT — 2 seconds]

*I don't know which train.*

[BEAT — 2 seconds]

*I am telling you anyway."*

---

# SCENE 18 — DOCUMENT CLOSE
**Timecode:** 03:43
**Duration:** 8 seconds

**VISUAL**
Camera holds on the Crimson classification stamp one final time.
Document is static. Slow fade to black over 5 seconds.

**AUDIO**
Transit hum: -18db — continues through fade. Electrical hum: -24db —
continues. Narration complete. Silence after the final line.

**CAPCUT NOTES**
- Layer 2: Document clip — Dissolve OUT, 5 seconds (the exhale, matching
  Video 01's closing convention)
- Transit hum and electrical hum continue underneath — do not cut here

**NARRATION**
None. Complete silence after Scene 17's final line.

---

# SCENE 19 — ARCHIVIST ANNOTATION CARD
**Timecode:** 03:51
**Duration:** 15 seconds

**VISUAL**
Black screen. Transit hum continues underneath.
Annotation card fades in over 2 seconds — aged paper texture, worn
edges, no classification stamp, no header.

> *"HH-013 remains active. Three Hunter teams have been assigned to*
> *this file since 1994. Two filed reports. One did not."*

Card holds for 8 seconds, then fades out over 2 seconds.

**AUDIO**
Transit hum: -18db, then begins fading out as card fades out.
Electrical hum: -24db, same fade.
No narration — the Archivist does not read this aloud.

**CAPCUT NOTES**
- Layer 6: Annotation card — Dissolve IN, 2 seconds
- Card holds: 8 seconds minimum, timed with a stopwatch
- Dissolve OUT: 2 seconds
- Audio Tracks 2 & 3: volume keyframe fade to silence over 5 seconds,
  timed to card fade-out

**NARRATION**
None — viewer reads the card silently.

---

# SCENE 20 — FINAL SILENCE
**Timecode:** 04:06
**Duration:** 8 seconds

**VISUAL**
Black screen. Nothing visible.

**AUDIO**
Transit hum fading out — complete silence 5 seconds in. Last 3 seconds:
total silence.

**CAPCUT NOTES**
- Layer 1: Black solid only
- Do not rush into the post-roll — hold the silence

**NARRATION**
None.

---

# SCENE 21 — POST-ROLL WATERMARK
**Timecode:** 04:14
**Duration:** 4 seconds

**VISUAL**
Obsidian Frequency channel watermark fades in — bottom right corner.
Worn. Stamped. Never clean. Holds 4 seconds. Fades to black over 1 second.

**AUDIO**
Complete silence. No hum. No music.

**CAPCUT NOTES**
- Layer 6: Watermark image — Dissolve IN, 1 second, bottom right
  (approx. 90% from left, 85% from top). Scale small.
- Dissolve OUT: 1 second
- No audio

**NARRATION**
None.

---

# SCENE 22 — END BLACK
**Timecode:** 04:19
**Duration:** 2 seconds

**VISUAL**
Pure black. Complete silence. Hard end.

**CAPCUT NOTES**
- Let CapCut's timeline end naturally
- No YouTube end screen cards — channel does not use them
- Total scaffolded runtime below lands short of the 6–8 min target on
  purpose — see Runtime Note

**NARRATION**
None.

---

# RUNTIME NOTE

This scene-by-scene scaffold totals approximately **4:21**, well under
the 6–8 minute target set in the video pipeline. That is expected and
matches how Video 01's storyboard scaffold (5:50) also ran short of its
written-script pacing before BEAT lengths were tuned in the edit.

To reach 6–8 minutes, extend primarily by:
- Lengthening [BEAT] and [LONG BEAT] holds throughout Scenes 07, 09, 16,
  and 17 — these carry the most narration-free space in the script and
  are the safest place to add air without adding new content
- Slowing the Ken Burns pan rate slightly across Scenes 05–17 so the
  camera has more distance to cover in the same reading
- Confirming Scene 11 (surveillance insert) and Scene 14 (full frame
  audio) both hit their full minimum holds — these two scenes alone
  account for 42 seconds and are not candidates for trimming

Do not pad by adding new sections or images — the script and asset list
are locked to this scope. Runtime is a pacing problem, not a content
problem.

---

# COMPLETE TIMELINE SUMMARY

| Scene | Name | Start | Duration | Key Action |
|-------|------|-------|----------|------------|
| 01 | Black Open | 00:00 | 5s | Dead silence |
| 02 | Pre-Roll Text | 00:05 | 4s | Typewriter text reveal |
| 03 | CRT + Transit Hum Fade | 00:09 | 3s | Overlays begin |
| 04 | Document Open | 00:12 | 6s | Document fades in, static |
| 05 | Narration Opens | 00:18 | 12s | Ken Burns begins, narration starts |
| 06 | The Crossed-Out Line | 00:30 | 4s | First Phantom seed — no callout |
| 07 | Section 1: Classification | 00:34 | 20s | Crimson threat level revealed |
| 08 | Section 2: Manifestation | 00:54 | 20s | Three conditions |
| 09 | Section 3: Known Behaviors | 01:14 | 25s | "I noticed it." |
| 10 | Section 4: Environmental Effects | 01:39 | 14s | Freeze into surveillance insert |
| 11 | Surveillance Insert: Image 01 | 01:53 | 20s | Hard glitch-cut, fixed frame |
| 12 | Return to Document | 02:13 | 3s | Glitch-cut back, pan resumes |
| 13 | Section 5 Lead-In | 02:16 | 10s | Stapled audio tab |
| 14 | Full Frame: Image 02 | 02:26 | 22s | PA announcement + phantom train |
| 15 | Return to Document | 02:48 | 10s | Dissolve back, narration resumes |
| 16 | Section 6: Related Incidents | 02:58 | 25s | Echo-4 referenced, fate withheld |
| 17 | Section 7: Hunter Notes | 03:23 | 20s | "Do not board the final train." |
| 18 | Document Close | 03:43 | 8s | Slow fade to black |
| 19 | Annotation Card | 03:51 | 15s | Card holds 8s, viewer reads |
| 20 | Final Silence | 04:06 | 8s | Hum fades to silence |
| 21 | Watermark | 04:14 | 4s | Channel mark, bottom right |
| 22 | End Black | 04:19 | 2s | Hard end |

**Scaffolded Runtime: ~4:21**
Extend BEAT lengths and Ken Burns pacing per the Runtime Note above to
reach the 6–8 minute target.

---

# AUDIO TRACK LAYOUT REFERENCE

```
Track 1 (Narration -6db):
  [silence]--[silence]--[NARRATION: Scene 05 → Scene 17, gap at Scenes 06, 12, 14]

Track 2 (Transit Hum -18db):
  [silence × 12s]--[FADE IN 3s]--[HOLD → → → → → → → → → ]--[FADE OUT 5s]

Track 3 (Electrical Hum -24db):
  [silence × 12s]--[FADE IN 3s]--[HOLD → → → → → → → → → ]--[FADE OUT 5s]

Track 4 (Page turns -12db):
  [silent]...[TURN: Sec 1]...[Sec 2]...[Sec 3]...[Sec 4]...(none: Sec 5 tab)...[Sec 6]...(none: Sec 7)

Track 5 (Distorted PA Announcement):
  [silent until Scene 14]--[FULL FRAGMENT, unmuted]--[silent after]

Track 6 (Phantom Train Approach):
  [silent until end of Scene 14]--[BUILD 5-8s]--[HARD CUT at peak]--[silent]
```

---

# FINAL ASSEMBLY CHECKLIST

Before export, confirm each of the following:

- [ ] Scene 01: 5 full seconds of complete silence before text
- [ ] Scene 02: Typewriter text effect — not instant reveal
- [ ] Scene 04: Crimson stamp visible and legible in document header
- [ ] Scene 06: Crossed-out line is genuinely illegible at normal viewing
      distance — no zoom, no slowdown, no sound cue drawing attention to it
- [ ] Scene 11: Surveillance insert uses hard glitch-cuts on both ends —
      zero dissolve keyframes anywhere in this scene
- [ ] Scene 11: CRT overlay OFF, VHS tracking jitter ON — confirm the two
      never run simultaneously
- [ ] Scene 11: indistinct platform shapes do not move under the jitter —
      this must read as a still frame with a moving degradation layer
- [ ] Scene 14: Image 02 is FULL FRAME — no document border visible
- [ ] Scene 14: zero narration overlapping the PA announcement or the
      phantom train sound — confirm Track 1 is empty for this entire scene
- [ ] Scene 14: phantom train sound cuts abruptly at peak — it must never
      resolve into an actual train arrival
- [ ] Scene 16: no supporting imagery added to the Station 13 reference —
      the sparseness is intentional
- [ ] Scene 17: "Do not board the final train" gets the full 4-second
      LONG BEAT on both sides — do not compress this line
- [ ] Scene 19: Annotation card holds minimum 8 seconds — time it
- [ ] Scene 19: Archivist does NOT narrate the annotation — silence only
- [ ] Transit ambient, electrical hum, and phantom train asset are saved
      to the shared asset library exactly as edited — Videos 06 and 11
      reuse all three identically
- [ ] No music anywhere in the video
- [ ] Export: 1920x1080, 24fps, MP4
