import './FoodItem.css';
import { assets } from '../../assets/assets';
import { useState } from 'react';

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt={name} />
        {
          !itemCount 
            ? <img className='add' onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_white} alt="" />
            : <div>
                <img onClick={() => setItemCount(prev => prev > 0 ? prev - 1 : 0)} src={assets.remove_icon_red} alt="" />
                <p>{itemCount}</p>
                <img onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_green} alt="" />
              </div>
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_stars} alt="Rating" />
        </div>
        <p className='food-item-description'>
          {description}
        </p>
        <p className='food-item-price'>RS{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
