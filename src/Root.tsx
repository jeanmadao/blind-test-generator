import { Composition } from 'remotion'
import { config, timing, songs } from './helper'
import { ProgressBar } from './ProgressBar'
import { Quiz } from './Quiz'
import { Video } from './Video'

export const RemotionRoot: React.FC = () => {
  const videoDurationInFrames = songs.reduce((accumulator, song) => config.fps * timing.guessingTimeInSecs + song.endRevealFrame - song.revealFrame + accumulator, 0)
  const quizDurationInFrames = config.fps * timing.guessingTimeInSecs + songs[0].endRevealFrame - songs[0].revealFrame

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
        durationInFrames={quizDurationInFrames}
        fps={config.fps}
        width={config.width}
        height={config.height}
        defaultProps={{
          name: songs[0].name,
          artist: songs[0].artist,
          year: songs[0].year,
          album: songs[0].album,
          anime: songs[0].anime,
          src: songs[0].src,
          endRevealFrame: songs[0].endRevealFrame,
          revealFrame: songs[0].revealFrame,
          startFrame: songs[0].startFrame,
          maxVol: songs[0].maxVol
        }}
      />

      <Composition
        id="Video"
        component={Video}
        durationInFrames={videoDurationInFrames}
        fps={config.fps}
        width={config.width}
        height={config.height}
      />
    </>
  )
}
