import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";    
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import './EditForm.css';

const API = process.env.REACT_APP_API_URL;

function EditForm() {
  const navigate = useNavigate();
  let { index } = useParams();
  
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });
  
  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${index}`, updatedSong)
      .then((response) => {
        setSong(response.data);
        navigate(`/songs/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };
  
  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckbox = () => {
    setSong({...song, is_favorite: !song.is_favorite});
  }

  useEffect(() => {
    axios
      .get(`${API}/songs/${index}`)
      .then((response) => {
        setSong(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song);
  };

  return (
    <div className="container col-md-6 text-white mt-5">
      <Form className="form-border" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            required
            placeholder="song name"
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label htmlFor="artist">Artist</Form.Label>
          <Form.Control
            id="artist"
            value={song.artist}
            type="text"
            onChange={handleTextChange}
            required
            placeholder="artist name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="album">Album</Form.Label>
          <Form.Control
            id="album"
            value={song.album}
            type="text"
            onChange={handleTextChange}
            required
            placeholder="album name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="time">Duration</Form.Label>
          <Form.Control
            id="time"
            value={song.time}
            type="text"
            onChange={handleTextChange}
            placeholder="33:45"
          />
        </Form.Group>
        
        <Form.Group className="mb-3 d-flex justify-content-between">
          <Form.Label htmlFor="is_favorite">Add Favorite List</Form.Label>
          <Form.Check
            id="is_favorite"
            checked={song.is_favorite}
            type="checkbox"
            onChange={handleCheckbox}
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button className="edit-btn w-100" type="submit" value="Save Edit">
            Save Edit
          </Button>
        </div>

      </Form>
    </div>
  );
}


export default EditForm;