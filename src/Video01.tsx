import React from 'react';
import { AbsoluteFill, Audio, Series, staticFile } from 'remotion';
import { Scene, v01Scenes } from '../data';
import { BlackScene } from './scenes/BlackScene';
import { PrerollTextScene } from './scenes/PrerollTextScene';
import { OverlayFadeInScene } from './scenes/OverlayFadeInScene';
import { WatermarkScene } from './scenes/WatermarkScene';
import { ImageCardScene } from './scenes/ImageCardScene';
import { UnimplementedScene } from './scenes/UnimplementedScene';
import { COLORS } from './theme';

const SceneRenderer: React.FC<{ scene: Scene }> = ({ scene }) => {
  switch (scene.type) {
    case 'black':
      return <BlackScene />;
    case 'preroll-text':
      return <PrerollTextScene durationInFrames={scene.durationInFrames} />;
    case 'overlay-fade-in':
      return <OverlayFadeInScene durationInFrames={scene.durationInFrames} />;
    case 'watermark':
      return <WatermarkScene durationInFrames={scene.durationInFrames} />;
    case 'document':
    case 'photo-insert':
    case 'full-frame':
    case 'location-insert':
    case 'annotation-card':
      return (
        <ImageCardScene
          variant={scene.type}
          asset={scene.asset}
          narration={scene.narration}
          name={scene.name}
          durationInFrames={scene.durationInFrames}
        />
      );
    default:
      return <UnimplementedScene name={scene.name} type={scene.type} />;
  }
};

export const Video01: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <Series>
        {v01Scenes.map((scene) => (
          <Series.Sequence
            key={scene.scene}
            durationInFrames={scene.durationInFrames}
            name={`${scene.scene}. ${scene.name}`}
          >
            {scene.audioAsset ? <Audio src={staticFile(scene.audioAsset)} /> : null}
            <SceneRenderer scene={scene} />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
};
