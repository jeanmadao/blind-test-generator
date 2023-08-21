import { Sequence, Series, staticFile, useVideoConfig } from "remotion"
import { ProgressBar } from "./ProgressBar"
import { timing, cdClip } from "./helper"
import { Clip } from "./Clip"
import { FadeOut } from "./FadeOut"

type Props = {
  songName: string,
  songArtist: string,
  songSrc: string,
  songDetails: string | null,
  revealFrame: number,
  startFrame: number,
}

export const Quiz:React.FC<Props> = ({ songName, songArtist, songSrc, songDetails, revealFrame, startFrame }) => {
  const { fps } = useVideoConfig()
  return (
    // <Series>
    //   <Series.Sequence durationInFrames={fps * (timing.guessingTimeInSecs + timing.transitionTimeInSecs)}>
    //     <Clip src={staticFile(songSrc)} startFrom={startFrame} />
    //     <Clip src={staticFile(cdClip.src)} startFrom={cdClip.startFrom} />
    //     <ProgressBar fillingTimeInSecs={timing.guessingTimeInSecs} />
    //   </Series.Sequence>
    //   <Series.Sequence durationInFrames={fps * timing.revealTimeInSecs}>
    //     <Clip src={staticFile(songSrc)} startFrom={revealFrame} />
    //   </Series.Sequence>
    // </Series>
    <>
      <Sequence from={fps * timing.guessingTimeInSecs} durationInFrames={fps * (timing.revealTimeInSecs)} >
        <Clip src={staticFile(songSrc)} startFrom={revealFrame} />
      </Sequence>
      <Sequence durationInFrames={fps * (timing.guessingTimeInSecs + timing.transitionTimeInSecs)}>
        <FadeOut lengthInSecs={1}>
          <Clip src={staticFile(songSrc)} startFrom={startFrame} />
          <Clip src={staticFile(cdClip.src)} startFrom={cdClip.startFrom} />
          <ProgressBar fillingTimeInSecs={timing.guessingTimeInSecs} />
        </FadeOut>
      </Sequence>
    </>
  )
}