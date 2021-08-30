import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneFood } from '../services/foods';
import { addFlavorToFood } from '../services/flavors';

export default function FoodDetail(props) {
  const [foodItem, setFoodItem] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const { id } = useParams();
  const { flavors } = props;

  useEffect(() => {
    const fetchFoodItem = async () => {
      const foodData = await getOneFood(id);
      setFoodItem(foodData);
    };
    fetchFoodItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedFlavor(value);
  };

  // Our handle submit for adding the flavor to our food
  const handleSubmit = async (e) => {
    e.preventDefault();
    const foodItem = await addFlavorToFood(id, selectedFlavor);
    setFoodItem(foodItem);
  };

  return (
    <div>
      <h3>{foodItem?.name}</h3>
      {foodItem?.flavors.map((flavor) => (
        <p key={flavor.id}>{flavor.name}</p>
      ))}
      {/* below is our for for the flavor drop down */}
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} defaultValue='default'>
          {/* we can set a default value to tell people to select a flavor*/}
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value='default'>
            -- Select a Flavor --
          </option>
          {/* now we loop over all flavors and return an <option> tag for each */}

          {flavors.map((flavor) => (
            // we track the flavor's id as the "value" which will get added to state onChange
            // the flavor's name goes between the open and close tag which is what the user sees
            <option value={flavor.id}>{flavor.name}</option>
          ))}
        </select>
        <button>Add</button>
      </form>
    </div>
  );
}