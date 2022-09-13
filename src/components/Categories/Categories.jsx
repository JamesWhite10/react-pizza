import React from 'react';

const Categories = () => {

  const [activeItem, setActiveItem] = React.useState(1);

  const onClickCategory = (index) => {
    setActiveItem(index);
  };

  const categories = [
    {id: 1, categories: 'Все'},
    {id: 2, categories: 'Мясные'},
    {id: 3, categories: 'Вегетарианская'},
    {id: 4, categories: 'Гриль'},
    {id: 5, categories: 'Острые'},
    {id: 6, categories: 'Закрытые'},
  ];

  return (
    <div className="categories">
      <ul>
        {
          categories.map((item, index) => (
            <li
              key={index}
              className={activeItem === item.id ? 'active' : ''}
              onClick={() => onClickCategory(item.id)}>
              {item.categories}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Categories;