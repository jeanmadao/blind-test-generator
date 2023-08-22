import { spring, useCurrentFrame, useVideoConfig } from "remotion"

type Props = {
  children: React.ReactNode,
  lengthInSecs: number
}

export const SlideFromLeft: React.FC<Props> = ({ children }) => {
  const { fps } = useVideoConfig()
  const frame = useCurrentFrame()

  const springValue = spring({
    frame,
    fps,
  })

  const slideFromLeftStyle = {
    transform: `translateX(${-100 + 100 * springValue}%)`,
  }

  return (
    <div style={slideFromLeftStyle}>
      {children}
    </div>
  )
}
