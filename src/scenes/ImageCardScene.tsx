import React from 'react';
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from 'remotion';
import { COLORS } from '../theme';
import { NarrationCaption } from './NarrationCaption';

type Variant = 'document' | 'photo-insert' | 'full-frame' | 'location-insert' | 'annotation-card';

const FRAME_STYLE: Record<Variant, { widthPct: number; heightPct: number; border: boolean; pan: 'vertical' | 'zoom' }> = {
  document: { widthPct: 46, heightPct: 92, border: true, pan: 'vertical' },
  'full-frame': { widthPct: 100, heightPct: 100, border: false, pan: 'zoom' },
  'photo-insert': { widthPct: 30, heightPct: 40, border: true, pan: 'zoom' },
  'location-insert': { widthPct: 40, heightPct: 45, border: true, pan: 'zoom' },
  'annotation-card': { widthPct: 50, heightPct: 30, border: true, pan: 'zoom' },
};

export const ImageCardScene: React.FC<{
  variant: Variant;
  asset: string | null;
  narration: string | null;
  name: string;
  durationInFrames: number;
}> = ({ variant, asset, narration, name, durationInFrames }) => {
  const frame = useCurrentFrame();
  const config = FRAME_STYLE[variant];

  const transform =
    config.pan === 'vertical'
      ? `scale(1.08) translateY(${interpolate(frame, [0, durationInFrames], [0, -6], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        })}%)`
      : `scale(${interpolate(frame, [0, durationInFrames], [1, 1.06], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        })})`;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: `${config.widthPct}%`,
          height: `${config.heightPct}%`,
          overflow: 'hidden',
          border: config.border ? `2px solid ${COLORS.brass}` : 'none',
          position: 'relative',
          backgroundColor: COLORS.shadow,
        }}
      >
        {asset ? (
          <Img
            src={staticFile(asset)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform,
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 12,
              background: `linear-gradient(160deg, ${COLORS.shadow}, ${COLORS.veil})`,
              border: `1px dashed ${COLORS.highlight}`,
            }}
          >
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: 16,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: COLORS.highlight,
              }}
            >
              Image pending
            </div>
            <div
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 20,
                color: COLORS.paper,
                textAlign: 'center',
                padding: '0 24px',
              }}
            >
              {name}
            </div>
          </div>
        )}
      </div>
      {narration ? <NarrationCaption narration={narration} /> : null}
    </AbsoluteFill>
  );
};
