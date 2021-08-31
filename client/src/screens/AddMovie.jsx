import { useState } from 'react';

export default function AddMovie(props) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { title } = formData;
  const { year } = formData;
  const { director } = formData;
  const { poster_img } = formData;
  const { plot } = formData;
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
        <input type="text" name='year' value={year} onchange={handleChange} />
      </label>
      <label>
        Director:
        <input type="text" name='director' value={director} onchange={handleChange} />
      </label>
      <label>
        Poster:
        <input type="img-url" name='poster' value={poster_img} onchange={handleChange} />
      </label>
      <label>
        Plot:
        <input type="text" name='plot' value={plot} onchange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}