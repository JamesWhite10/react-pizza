import React from 'react';
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import PizzaSkeleton from "../components/PizzaSkeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [categoryType, setCategoryType] = React.useState(0);
  const [sortType, setSortType] = React.useState({
      name: 'популярности', sortProperty: 'rating'
  });

  React.useEffect(() => {
      setLoading(true);

      const sortBy = sortType.sortProperty.replace('-', '');
      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
      const category = categoryType > 0 ? `category=${categoryType}` : '';

      console.log(category)

    fetch(`https://633f17280dbc3309f3c4b2b3.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
      .then((response) => response.json())
      .then((pizzas) => {
        setLoading(false);
        setItems(pizzas)
      });
      console.log(items)
    window.scrollTo(0, 0);
  }, [categoryType, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryType} onChangeCategory={(id) => setCategoryType(id)}/>
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading ? [...new Array(4)].map((_, index) => (
          <PizzaSkeleton key={index}/>
        )) : items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj}/>
        ))}
      </div>
    </div>
  );
};

export default Home;