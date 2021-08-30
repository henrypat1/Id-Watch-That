import { useState } from 'react';

export default function CreateReview(props) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { header } = formData;
  const { review } = formData;
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
      <h3>Add Review</h3>
      <label>
        Header:
        <input type='text' name='header' value={header} onChange={handleChange} />
      </label>
      <label>
        Review:
        <input type='text' name='review' value={review} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}