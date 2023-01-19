import React, { Fragment } from "react";

const CartItem = (props) => {

	return (
		<Fragment>
			 {props.content.map((item, index) => (
				 <div className="cart__column" key={item.id}
					 
					
				 >
					 <div className={item.disabled ? 'cart__item disabled' : item.selected && item.hover ? 'cart__item selected hover': item.selected ? 'cart__item selected' :  'cart__item'}
						 onClick={!item.disabled ? () => props.onSelect(item.id) : (() => { return false })}
						 onMouseLeave={() => props.addHover(item.id)}
					 >
						 <div className="cart__item-info">
							 {item.top}
					</div>
						 <div className="cart__item-title">
							 {item.title}
					</div>
						 <div className="cart__item-subtitle">
							 {item.subtitle}
						 </div>
						 <div className="cart__item-about">
							 {item.info.map((item, index) => (
								 <p key={index}><strong>{item.bold}</strong> {item.content}</p>))}
						 </div>
						 
					<div className="cart__item-image">
						<img src={item.img} alt="" />
						<div className="cart__item-weight">
								 <span>{item.weight}</span>
								 <p>кг</p>
						</div>
					</div>
			</div>
					 <div className="cart__comment">
						 {item.disabled ? <p>Печалька, {item.subtitle} закончился.</p> :
							 item.selected ? <p>{item.selectedInfo}</p> :
								 <p>Чего сидишь? Порадуй котэ, <a href="#" onClick={!item.disabled ? () => props.onSelect(item.id) : (() => { return false })}>купи.</a></p>}
			</div>
			
			</div>
      ))}
		</Fragment>

		
	)

}
export default CartItem