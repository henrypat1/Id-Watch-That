import { useState } from 'react';

export default function AddMovie(props) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { name } = formData;
  const { year } = formData;
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
        Name:
        <input type='text' name='name' value={name} onChange={handleChange} />
      </label>
      <label>
        <input type="text" name='year' value={year} onchange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}