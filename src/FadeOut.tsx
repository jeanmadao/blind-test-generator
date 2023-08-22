import { interpolate, useCurrentFrame, useVideoConfig } from "remotion"

type Props = {
  children: React.ReactNode,
  lengthInSecs: number
}
export const FadeOut: React.FC<Props> = ({ children, lengthInSecs }) => {
  const frame = useCurrentFrame()
  const { fps, durationInFrames } = useVideoConfig()
  const lengthInFrames = fps * lengthInSecs

  const fadeOutStyle = {
    opacity: interpolate(
      frame,
      [durationInFrames - lengthInFrames, durationInFrames],
      [1, 0],
      {
        extrapolateLeft: 'clamp'
      }
    )

  }
  return (
    <div style={fadeOutStyle}>
      {children}
    </div>
  )
}
