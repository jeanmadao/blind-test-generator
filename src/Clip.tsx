import { AbsoluteFill, interpolate, OffthreadVideo, useCurrentFrame, useVideoConfig } from "remotion"

type Props = {
  src: string
  startFrom: number
  maxVol: number
}

export const Clip: React.FC<Props> = ({ src, startFrom, maxVol }) => {
  const frame = useCurrentFrame()
  const { durationInFrames, fps } = useVideoConfig()
  const absoluteFillStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  }
  const videoStyle = {
    height: `100%`
  }
  return (
    <AbsoluteFill style={absoluteFillStyle}>
      <OffthreadVideo
        style={videoStyle}
        src={src}
        startFrom={startFrom}
        volume={interpolate(frame, [0, fps, durationInFrames - fps, durationInFrames], [0, maxVol, maxVol, 0])}
      />
    </AbsoluteFill>
  )
}
