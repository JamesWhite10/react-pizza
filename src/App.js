import React from "react";
import './App.css';
import './scss/app.scss'
import Header from "./components/Header/Header";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import Sort from "./components/Sort/Sort";
import Categories from "./components/Categories/Categories";
import PizzaSkeleton from "./components/PizzaSkeleton";

function App() {
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
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {loading ? [...new Array(6)].map((_, index)=> (
                          <PizzaSkeleton key={index}/>
                        )) : items.map((obj)=> (
                              <PizzaBlock key={obj.id} {...obj}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
