import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'


const API = process.env.REACT_APP_API_URL; 

function SongDetails() {
  const [song, setSongs] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${index}`)
      .then((response) => {
        setSongs(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/songs/${index}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((error) => console.error("Error:", error));
  };
  
  return (
    <div className='container mt-5'>
      <Card>
        <Card.Body>
          <Card.Title>{song.name} - {song.artist}</Card.Title>
          <Card.Text>
            <h4>Album: <span>{song.album}</span></h4>
            <p> <span>Time:</span> {song.time}</p>
            <p>Favorite: 
                {song.is_favorite ? 
                  <span className='text-danger'>
                    <FontAwesomeIcon icon={faMusic}/>
                  </span>  
                  : 
                  <span className='text-secondary'>
                    <FontAwesomeIcon icon={faMusic}/>
                  </span>  
                }            
            </p>
          </Card.Text>

          <Button variant='primary' as={Link} to={`/songs`}>Back</Button>
          <Button variant='warning' as={Link} to={`/songs/${index}/edit`}>Edit</Button>
          <Button variant='danger' onClick={handleDelete}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SongDetails;
