import React from 'react';
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import PizzaSkeleton from "../components/PizzaSkeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://633f17280dbc3309f3c4b2b3.mockapi.io/items')
      .then((response) => response.json())
      .then((pizzas) => {
        setLoading(false);
        setItems(pizzas)
      });
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories/>
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading ? [...new Array(8)].map((_, index) => (
          <PizzaSkeleton key={index}/>
        )) : items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj}/>
        ))}
      </div>
    </div>
  );
};

export default Home;