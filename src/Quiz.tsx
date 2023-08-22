import { Sequence, staticFile, useVideoConfig } from "remotion"
import { ProgressBar } from "./ProgressBar"
import { timing, cdClip } from "./helper"
import { Clip } from "./Clip"
import { FadeOut } from "./FadeOut"
import { SongInfo } from "./SongInfo"

type Props = {
  name: string,
  artist: string,
  year: number,
  album: string,
  anime: string | null,
  src: string,
  startFrame: number,
  revealFrame: number,
  endRevealFrame: number,
  maxVol: number,
}

export const Quiz: React.FC<Props> = ({ name, artist, year, album, anime, src, startFrame, revealFrame, endRevealFrame, maxVol }) => {
  const { fps } = useVideoConfig()
  return (
    <>
      <Sequence from={fps * timing.guessingTimeInSecs} durationInFrames={endRevealFrame - revealFrame} >
        <Clip src={staticFile(src)} startFrom={revealFrame - timing.transitionTimeInSecs * fps} maxVol={maxVol} />
        <Sequence from={fps * timing.transitionTimeInSecs} durationInFrames={8 * fps}>
          <FadeOut lengthInSecs={timing.transitionTimeInSecs}>
            <SongInfo name={name} artist={artist} year={year} album={album} anime={anime} />
          </FadeOut>
        </Sequence>
      </Sequence>
      <Sequence durationInFrames={fps * (timing.guessingTimeInSecs + timing.transitionTimeInSecs)}>
        <FadeOut lengthInSecs={timing.transitionTimeInSecs}>
          <Clip src={staticFile(src)} startFrom={startFrame} maxVol={maxVol} />
          <Clip src={staticFile(cdClip.src)} startFrom={cdClip.startFrom} maxVol={0} />
          <ProgressBar fillingTimeInSecs={timing.guessingTimeInSecs} />
        </FadeOut>
      </Sequence>
    </>
  )
}
