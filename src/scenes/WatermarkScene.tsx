import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS } from '../theme';

export const WatermarkScene: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, durationInFrames * 0.4], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 64,
      }}
    >
      <div
        style={{
          opacity,
          fontFamily: 'Georgia, serif',
          fontSize: 20,
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: COLORS.highlight,
        }}
      >
        Hunters Directorate — HH
      </div>
    </AbsoluteFill>
  );
};
