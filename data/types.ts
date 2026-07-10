export type SceneType =
  | 'black'
  | 'preroll-text'
  | 'overlay-fade-in'
  | 'document'
  | 'photo-insert'
  | 'location-insert'
  | 'surveillance-insert'
  | 'full-frame'
  | 'testimony-card'
  | 'annotation-card'
  | 'watermark';

export interface Scene {
  /** Scene number as it appears in the storyboard markdown */
  scene: number;
  /** Scene name as it appears in the storyboard markdown */
  name: string;
  /** Which visual system this scene belongs to — maps to a Remotion component */
  type: SceneType;
  /** Frame this scene starts on, at 24fps, per the project's documented export setting */
  startFrame: number;
  /** How many frames this scene holds for */
  durationInFrames: number;
  /**
   * Exact narration text for this scene, including [BEAT] / [LONG BEAT] cues as written
   * in the script. Strip the cue brackets before sending to ElevenLabs; use the cue
   * positions to decide where to split narration into separate audio clips so pause
   * length becomes a Remotion frame offset instead of a TTS-generated silence.
   * `null` means this scene is silent by design — do not synthesize narration for it.
   */
  narration: string | null;
  /**
   * Relative path (from public/) to the image/document asset this scene displays.
   * `null` means the asset does not exist yet — check midjourney_prompts_v01_v03.md
   * for the prompt, or docs/ for the branding source (see manifest generation notes).
   */
  asset: string | null;
}

export const FPS = 24;
