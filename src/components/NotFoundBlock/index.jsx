import React from 'react';
import classNames from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={classNames.root}>
      <h2>Ничего не найдено</h2>
      <span className={classNames.icon}>😕</span>
      <p className={classNames.description}>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
};

export default NotFoundBlock;