import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';

export default function UpdateMovie(props) {
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    director: '',
    poster_img: '',
    plot: ''
  })
  const { title, year, director, poster_img, plot } = formData;
  const {movies, handleUpdate} = props;
  const {id} = useParams();

  useEffect(()=> {
    const prefillFormData = () => {
      const movie = movies.find((movie)=> movie.id === Number(id));
      setFormData({ title: movie?.title, year: movie?.year, director: movie?.director, poster_img: movie?.poster_img, plot: movie?.plot  })
    }
    if (movies.length) {
      prefillFormData()
    }
  }, [movies, id])
  console.log(formData)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form
    onSubmit={(e) => {
				e.preventDefault();
				handleUpdate(id, formData);
			}}
      >
      <label>
        Title:
        <input 
          type='text' 
          name='title' 
          value={formData.title} 
          onChange={handleChange}
        />
      </label>
      <label>
        Year:
        <input 
          type='text' 
          name='year' 
          value={formData.year} 
          onChange={handleChange}
        />
      </label>
      <label>
        Director:
        <input 
          type='text' 
          name='Director' 
          value={formData.director} 
          onChange={handleChange}
        />
      </label>
      <label>
        poster:
        <input 
          type='text' 
          name='poster_img' 
          value={formData.poster_img} 
          onChange={handleChange}
        />
      </label>
      <label>
        Plot:
        <input 
          type='text' 
          name='plot' 
          value={formData.plot} 
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}