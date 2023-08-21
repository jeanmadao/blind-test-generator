import {Composition} from 'remotion'
import {ProgressBar} from './ProgressBar'
import {Video} from './Video'

export const RemotionRoot: React.FC = () => {
  const fps = 30
  const width = 1920
  const height = 1080
  const durationInSec = 60
  const durationInFrames = durationInSec * fps
	return (
		<>
			<Composition
				id="ProgressBar"
				component={ProgressBar}
				durationInFrames={fps * 6}
				fps={fps}
				width={width}
				height={height}
				defaultProps={{
					loadingTimeInSecs: 5
				}}
			/>
			<Composition
				id="Video"
				component={Video}
				durationInFrames={durationInFrames}
				fps={fps}
				width={width}
				height={height}
			/>
		</>
	)
}
