import { loadFont } from "@remotion/google-fonts/Roboto"
import { AbsoluteFill } from "remotion"
import { SlideFromLeft } from "./SlideFromLeft"

type Props = {
  name: string
  artist: string
  year: number
  album: string
  anime: string | null
}

export const SongInfo: React.FC<Props> = ({ name, artist, year, album, anime }) => {
  const { fontFamily } = loadFont()
  const absoluteFillStyle = {
    justifyContent: 'end',
    alignItems: 'start',
  }

  const songInfoStyle = {
    display: 'flex',
    flexDirection: 'row',
    fontFamily,
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: '0px 60px 0px 0px',
    left: -400
  }

  const songNameArtistStyle = {
    backgroundColor: 'red',
    borderRadius: '0px 60px 0px 0px',
    color: 'white',
    alignItems: 'end',
    justifyContent: 'end',
    padding: '20px 60px 20px 230px',
    marginLeft: -200
  }

  const songDetailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px 60px 20px 30px',
  }

  return (
    <AbsoluteFill style={absoluteFillStyle} >
      <SlideFromLeft lengthInSecs={0.4}>
        <div style={songInfoStyle} id='song-info' >
          <div style={songNameArtistStyle} id='song-name-artist'>
            <div>{artist}</div>
            <div>{name}</div>
          </div>
          <div style={songDetailsStyle} id='song-details'>
            <div>{album} ({year})</div>
            {anime && <div>{anime}</div>}
          </div>
        </div>
      </SlideFromLeft>
    </AbsoluteFill>
  )
}
