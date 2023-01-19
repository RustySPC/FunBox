import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import './App.scss';
import CartItem from './components/card';

function App() {
  const [items, setItems] = useState();
  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/RustySPC/FunBox/items')
      .then(({ data }) => {
        setItems(data);
      });
  }, []);
  const onSelect = (index) => {
    if (index) {
       const newItems = items.map(item => {
         if (item.id === index) {
        item.hover = false
        item.selected = !item.selected
      }
      return item;
       });
    setItems(newItems);
      
    }
  }
  const addHover = (index) => {
    if (index) {
      const newItems = items.map(item => {
        item.hover = true
      return item;
      });
      console.log(newItems);
    setItems(newItems);
    }
  }


  return (
    <section className="cart">
      <div className='cart__container'>
        <div className="cart__title _title">Ты сегодня покормил кота?</div>
        <div className="cart__row">
          {items ? (
            <CartItem
              content={items}
              onSelect={onSelect}
              addHover={addHover}
            />
          ): 'Загрузка...'}
        </div>
      </div>
    </section>
  )
}

export default App;
