import React from 'react';
import { Composition } from 'remotion';
import { FPS, v01TotalDurationInFrames } from '../data';
import { Video01 } from './Video01';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="v01-the-veil-explained"
        component={Video01}
        durationInFrames={v01TotalDurationInFrames}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
