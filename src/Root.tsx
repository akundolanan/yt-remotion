import React from 'react';
import {Composition} from 'remotion';
import {CaptionedShort} from './CaptionedShort';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CaptionedShort"
        component={CaptionedShort}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          videoSrc: '/input.mp4',
          subtitleSrc: '/subtitles.json',
          title: 'Contoh Shorts Lokal',
        }}
      />
    </>
  );
};
