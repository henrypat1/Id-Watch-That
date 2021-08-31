import { useState } from 'react';
import { postMovie } from '../services/movie';

export default function AddMovie(props) {
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    director: '',
    poster_img: '',
    plot: ''
  });
  const { title, year, director, poster_img, plot } = formData;
  
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return ( 
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      
      <h3>Add Movie</h3>
      <label>
        Title:
        <input type='text' name='title' value={title} onChange={handleChange} />
      </label>
      <label>
        Year:
        <input type="text" name='year' value={year} onChange={handleChange} />
      </label>
      <label>
        Director:
        <input type="text" name='director' value={director} onChange={handleChange} />
      </label>
      <label>
        Poster:
        <input type="text" name='poster_img' value={poster_img} onChange={handleChange} />
      </label>
      <label>
        Plot:
        <input type="text" name='plot' value={plot} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}