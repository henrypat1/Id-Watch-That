import { useState } from 'react';
// import { addReviewToMovie } from '../services/review';

export default function CreateReview(props) {
  const [formData, setFormData] = useState({
    header: '',
    review: '',
  });
  const { header, review, } = formData;
  const { id, handleCreateReview } = props;

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
        handleCreateReview(id, formData);
      }}
    >
      <h3>Add Review</h3>
      <label>
        Header:
        <input name='header' value={header} onChange={handleChange} />
      </label>
      <label>
        Review:
        <input name='review' value={review} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}