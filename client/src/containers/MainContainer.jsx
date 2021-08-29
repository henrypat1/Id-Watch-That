import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllFoods, postFood, putFood, deleteFood } from '../services/foods';
import { getAllFlavors } from '../services/flavors';
import Flavors from '../screens/Flavors';
import Foods from '../screens/Foods';
import FoodCreate from '../screens/FoodCreate';
import FoodEdit from '../screens/FoodEdit';
import FoodDetail from '../screens/FoodDetail';

export default function MainContainer(props) {
  const [foods, setFoods] = useState([]);
  const [flavors, setFlavors] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchFoods = async () => {
      const foodList = await getAllFoods();
      setFoods(foodList);
    };
    fetchFoods();
  }, []);

  useEffect(() => {
    const fetchFlavors = async () => {
      const flavorList = await getAllFlavors();
      setFlavors(flavorList);
    };
    fetchFlavors();
  }, []);

  const handleCreate = async (formData) => {
    const foodData = await postFood(formData);
    setFoods((prevState) => [...prevState, foodData]);
    history.push('/foods');
  };

  const handleUpdate = async (id, formData) => {
    const foodData = await putFood(id, formData);
    setFoods((prevState) =>
      prevState.map((food) => {
        return food.id === Number(id) ? foodData : food;
      })
    );
    history.push('/foods');
  };

  const handleDelete = async (id) => {
    await deleteFood(id);
    setFoods((prevState) => prevState.filter((food) => food.id !== id));
  };

  return (
    <div>
      <Switch>
        <Route path='/flavors'>
          <Flavors flavors={flavors} />
        </Route>
        <Route path='/foods/:id/edit'>
          <FoodEdit foods={foods} handleUpdate={handleUpdate} />
        </Route>
        <Route path='/foods/new'>
          <FoodCreate handleCreate={handleCreate} />
        </Route>
        <Route path='/foods/:id'>
          <FoodDetail flavors={flavors} />
        </Route>
        <Route path='/foods'>
          <Foods
            foods={foods}
            handleDelete={handleDelete}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  );
}
