import React, {useMemo} from 'react';
import {
  AbsoluteFill,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Video,
} from 'remotion';
import subtitles from './sample-subtitles.json';

type CaptionItem = {
  startMs: number;
  endMs: number;
  text: string;
};

type Props = {
  videoSrc?: string;
  subtitleSrc?: string;
  title?: string;
};

const useActiveCaption = (items: CaptionItem[], frame: number, fps: number) => {
  return useMemo(() => {
    const currentMs = (frame / fps) * 1000;
    return items.find((item) => currentMs >= item.startMs && currentMs <= item.endMs) ?? null;
  }, [frame, fps, items]);
};

export const CaptionedShort: React.FC<Props> = ({videoSrc = '/input.mp4', title = 'Contoh Shorts Lokal'}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const items = subtitles as CaptionItem[];
  const active = useActiveCaption(items, frame, fps);

  return (
    <AbsoluteFill style={{backgroundColor: '#000', fontFamily: 'Arial, sans-serif'}}>
      <Video src={staticFile(videoSrc.replace(/^\//, ''))} />

      <AbsoluteFill
        style={{
          justifyContent: 'space-between',
          padding: '72px 48px 96px',
        }}
      >
        <div
          style={{
            alignSelf: 'flex-start',
            background: 'rgba(0,0,0,0.55)',
            color: 'white',
            padding: '18px 26px',
            borderRadius: 22,
            fontSize: 40,
            fontWeight: 700,
            maxWidth: 860,
            lineHeight: 1.15,
          }}
        >
          {title}
        </div>

        <div
          style={{
            alignSelf: 'center',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 100,
          }}
        >
          {active ? (
            <div
              style={{
                background: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '26px 34px',
                borderRadius: 30,
                fontSize: 62,
                fontWeight: 800,
                lineHeight: 1.12,
                textAlign: 'center',
                maxWidth: 920,
                boxShadow: '0 14px 50px rgba(0,0,0,0.35)',
              }}
            >
              {active.text}
            </div>
          ) : null}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
