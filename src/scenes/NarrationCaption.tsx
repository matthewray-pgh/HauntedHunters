import React from 'react';
import { COLORS } from '../theme';

// Strips script markdown (*italics*, [BEAT] cues) down to plain readable text.
// This is a scratch-track caption for scrubbing the timeline before ElevenLabs
// audio exists — it is not the final on-screen treatment.
const cleanNarration = (narration: string): string =>
  narration
    .replace(/\[BEAT[^\]]*\]/gi, '')
    .replace(/\[LONG BEAT[^\]]*\]/gi, '')
    .replace(/\*/g, '')
    .replace(/\n{2,}/g, '\n')
    .trim();

export const NarrationCaption: React.FC<{ narration: string }> = ({ narration }) => {
  const text = cleanNarration(narration);
  if (!text) return null;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 48,
        left: 120,
        right: 120,
        padding: '20px 28px',
        background: 'rgba(26, 29, 31, 0.78)',
        border: `1px solid ${COLORS.brass}`,
        borderRadius: 4,
      }}
    >
      <div
        style={{
          fontSize: 12,
          letterSpacing: 2,
          textTransform: 'uppercase',
          color: COLORS.brass,
          marginBottom: 8,
          fontFamily: 'monospace',
        }}
      >
        Draft VO — not final
      </div>
      <div
        style={{
          fontSize: 26,
          lineHeight: 1.4,
          color: COLORS.paper,
          fontFamily: 'Georgia, serif',
          whiteSpace: 'pre-line',
        }}
      >
        {text}
      </div>
    </div>
  );
};
