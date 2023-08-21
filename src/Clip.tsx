import { AbsoluteFill, interpolate, OffthreadVideo, useCurrentFrame, useVideoConfig } from "remotion"

type Props = {
  src: string
  startFrom: number
}

export const Clip:React.FC<Props> = ({ src, startFrom }) => {
  const frame = useCurrentFrame()
  const {durationInFrames, fps} = useVideoConfig()
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
      volume={interpolate(frame,  [0, fps, durationInFrames - fps, durationInFrames],[0, 1, 1, 0])}
    />
    </AbsoluteFill>
  )
}