import React from 'react';
import { AbsoluteFill } from 'remotion';
import { COLORS } from '../theme';

// Covers SceneTypes not yet used by v01 (e.g. testimony-card, surveillance-insert)
// so v02/v03 data can be dropped in later without the composition crashing.
export const UnimplementedScene: React.FC<{ name: string; type: string }> = ({ name, type }) => (
  <AbsoluteFill
    style={{
      backgroundColor: COLORS.background,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 8,
    }}
  >
    <div style={{ fontFamily: 'monospace', color: COLORS.crimson, fontSize: 16 }}>
      NO COMPONENT FOR TYPE: {type}
    </div>
    <div style={{ fontFamily: 'Georgia, serif', color: COLORS.paper, fontSize: 22 }}>{name}</div>
  </AbsoluteFill>
);
