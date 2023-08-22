import { Series, useVideoConfig } from "remotion"
import { Quiz } from "./Quiz"
import { songs, timing } from "./helper"

export const Video = () => {
  const { fps } = useVideoConfig()
  return (
    <Series>
      {songs.map(song =>
        <Series.Sequence durationInFrames={fps * timing.guessingTimeInSecs + song.endRevealFrame - song.revealFrame}>
          <Quiz
            name={song.name}
            artist={song.artist}
            year={song.year}
            album={song.album}
            anime={song.anime}
            src={song.src}
            startFrame={song.startFrame}
            revealFrame={song.revealFrame}
            endRevealFrame={song.endRevealFrame}
            maxVol={song.maxVol}
          />
        </Series.Sequence>
      )}
    </Series>
  )
}
