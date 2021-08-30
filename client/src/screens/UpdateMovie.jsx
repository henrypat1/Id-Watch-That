import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';

export default function UpdateMovie(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const {movies, handleUpdate} = props;
  const {id} = useParams();

  useEffect(()=> {
    const prefillFormData = () => {
      const movie = movies.find((food)=> movies.id === Number(id));
      setFormData({ name: movie.name })
    }
    if (movies.length) {
      prefillFormData()
    }
  }, [movies, id])

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
        Name:
        <input 
          type='text' 
          name='name' 
          value={formData.name} 
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}