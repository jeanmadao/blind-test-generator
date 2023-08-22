import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion"

type Props = {
  fillingTimeInSecs: number
}

export const ProgressBar:React.FC<Props> = ({ fillingTimeInSecs }) => {
  const { fps, width, height } = useVideoConfig()
  const fillingTimeInFrames = fillingTimeInSecs * fps
  const frame = useCurrentFrame()

  const absoluteFillStyle = {
    justifyContent: 'center',
    alignItems: 'center',
  }

  const progressBarStyle = {
    position: 'absolute',
    bottom: height * 0.1,
  } as React.CSSProperties

  const barBorderStyle = {
    padding: 20,
    width: width * 0.6,
    border: 'solid',
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 5,
  }

  const barFillerStyle = {
    borderRadius: 20,
    height: height * 0.07,
    width: interpolate(
      frame,
      [0, fillingTimeInFrames],
      [0, barBorderStyle.width - 2 * (barBorderStyle.padding + barBorderStyle.borderWidth)],
      { extrapolateRight: 'clamp' }
    ),
    backgroundColor: 'white'
  }
  
  return (
    <AbsoluteFill style={absoluteFillStyle}>
      <div style={progressBarStyle} id='progress-bar'>
        <div style={barBorderStyle} id='bar-border'>
          <div style={barFillerStyle} id='bar-filler'>{}</div>
        </div>
      </div>

    </AbsoluteFill>
  )
}
