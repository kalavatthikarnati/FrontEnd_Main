import React, { useContext } from 'react'
import './FoodItem.css'
import star from '../../assets/star.png';
import plus_white from '../../assets/plus_white.png';
import plus from '../../assets/plus_green.jpeg';
import minus from '../../assets/minus1.png';
import { StoreContext } from '../Context/StoreContext';

const FoodItem = ({id, name, price, description, image}) => {
   
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className='food-item-img-counter'>
        <img className="food-item-image" src={url+"/images/"+image} alt='' />
        {!cartItems[id]
           ?<img className="add" onClick={()=>addToCart(id)}  src={plus_white} alt=''/>
           :<div className='food-item-counter'>
             <img onClick={()=>removeFromCart(id)} src={minus} alt='' />
             <p>{cartItems[id]}</p>
             <img onClick={()=>addToCart(id)} src={plus} alt='' />
           </div>

        } 
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={star} alt='star' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
