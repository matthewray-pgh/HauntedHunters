import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS } from '../theme';

export const OverlayFadeInScene: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const overlayOpacity = interpolate(frame, [0, durationInFrames], [0, 0.35], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <AbsoluteFill
        style={{
          opacity: overlayOpacity,
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(220,230,214,0.5) 0px, rgba(220,230,214,0.5) 1px, transparent 1px, transparent 3px)',
        }}
      />
      <AbsoluteFill
        style={{
          opacity: overlayOpacity,
          background: `radial-gradient(ellipse at center, transparent 55%, ${COLORS.background} 100%)`,
        }}
      />
    </AbsoluteFill>
  );
};
