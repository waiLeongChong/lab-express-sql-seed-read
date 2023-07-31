import React, { useEffect, useState } from 'react'
import Song from './Song';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import './Songs.css';

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(()=>{
    axios
      .get(`${API}/songs`)
      .then((response) => setSongs(response.data))
      .catch((e) => console.error("catch", e));
  },[]);

  return (
    <div>
      <section>
        <Table striped bordered className="table-custom">
          <thead>
            <tr>
              <th className="py-3">Favorite</th>
              <th className="py-3">Song Name</th>
              <th className="py-3">Artist</th>
              <th className="py-3">Time</th>
            </tr>
          </thead>
          <tbody>
              {songs.map((song)=> {
                  return <Song key={song.id} song={song} />
              })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default Songs;