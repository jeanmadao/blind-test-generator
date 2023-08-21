import {Composition} from 'remotion'
import {config, timing, songs} from './helper'
import {ProgressBar} from './ProgressBar'
import {Quiz} from './Quiz'
import {Video} from './Video'

export const RemotionRoot: React.FC = () => {
  const durationInSec = 60
  const durationInFrames = durationInSec * config.fps
	const quizTimeInSecs = timing.guessingTimeInSecs + timing.transitionTimeInSecs + timing.revealTimeInSecs

	return (
		<>
			<Composition
				id="ProgressBar"
				component={ProgressBar}
				durationInFrames={config.fps * (timing.guessingTimeInSecs + timing.transitionTimeInSecs)}
				fps={config.fps}
				width={config.width}
				height={config.height}
				defaultProps={{
					fillingTimeInSecs: timing.guessingTimeInSecs
				}}
			/>

			<Composition
				id="Quiz"
				component={Quiz}
				durationInFrames={config.fps * quizTimeInSecs}
				fps={config.fps}
				width={config.width}
				height={config.height}
				defaultProps={{
					songName: songs[0].name,
					songArtist: songs[0].artist,
					songDetails: songs[0].details,
					songSrc: songs[0].src,
					revealFrame: songs[0].revealFrame,
					startFrame: songs[0].startFrame
				}}
			/>

			<Composition
				id="Video"
				component={Video}
				durationInFrames={durationInFrames}
				fps={config.fps}
				width={config.width}
				height={config.height}
			/>
		</>
	)
}
