import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

function Song({ song }) {
  return ( 
    <tr className="py-5">
      <td>
        {song.is_favorite ? 
          <span className="main-color">
            <FontAwesomeIcon icon={faMusic}/>
          </span>  
          : 
          <span className="text-secondary">
            <FontAwesomeIcon icon={faMusic}/>
          </span>  
        }
      </td>
      <td>
        <a href={`/songs/${song.id}`} className="text-decoration-none text-white">{song.name}</a>
      </td>
      <td>
        {song.artist}
      </td>
      <td>
        {song.time}
      </td>
    </tr>
  );
}


export default Song;