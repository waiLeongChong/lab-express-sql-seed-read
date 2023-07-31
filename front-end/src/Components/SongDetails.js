import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import './SongDetails.css';

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
    <div className='container col-md-7 mt-5'>
      <Card className='card-custom text-white p-4'>
        <Card.Body>
          <Card.Title>
            <h4 className='fs-2'>{song.name} <span className='text-secondary'> - {song.artist}</span></h4>
          </Card.Title>
          <Card.Text>
            <p className='fs-3'>Album<span className='text-secondary'> - {song.album}</span></p>
            <Card.Text className="d-flex justify-content-between align-items-center">
              <div>Favorite  
                {song.is_favorite ? 
                  <span className='text-danger'>
                    <FontAwesomeIcon icon={faMusic}/>
                  </span>  
                  : 
                  <span className='text-secondary'>
                    <FontAwesomeIcon icon={faMusic}/>
                  </span>  
                }  
              </div>
              <div>Time: {song.time}</div>
            </Card.Text>
          </Card.Text>

        </Card.Body>
      </Card>

      <div className='d-flex justify-content-center mt-3'>
        <Button className='btn-lg custom-btn m-2' as={Link} to={`/songs`}>Back</Button>
        <Button className='btn-lg custom-btn m-2' as={Link} to={`/songs/${index}/edit`}>Edit</Button>
        <Button className='btn-lg custom-btn m-2' onClick={handleDelete}>Delete</Button>
      </div>
    </div>
  );
}

export default SongDetails;
