import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import './NewForm.css';

const API = process.env.REACT_APP_API_URL;

function NewForm() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckbox = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };

  return (
    <div className="container col-md-6 mt-5 text-white">
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
            placeholder="artist name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="album">Album</Form.Label>
          <Form.Control
            id="album"
            type="text"
            value={song.album}
            onChange={handleTextChange}
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
          <Form.Label htmlFor="is_favorite">Add to Favorite List</Form.Label>
          <Form.Check 
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckbox}
            checked={song.is_favorite}
          />
        </Form.Group>
        
        <div className="d-flex justify-content-center">
          <Button className="submit-btn w-100" type="submit">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default NewForm;
