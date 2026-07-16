import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS } from '../theme';

const LINE = 'This document was not cleared for release.';

export const PrerollTextScene: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, durationInFrames * 0.2, durationInFrames * 0.8, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const charsVisible = Math.floor(
    interpolate(frame, [0, durationInFrames * 0.5], [0, LINE.length], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

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
          fontFamily: 'monospace',
          fontSize: 34,
          color: COLORS.paper,
          opacity,
          letterSpacing: 1,
        }}
      >
        {LINE.slice(0, charsVisible)}
      </div>
    </AbsoluteFill>
  );
};
