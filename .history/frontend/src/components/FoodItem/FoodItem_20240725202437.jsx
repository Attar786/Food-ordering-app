import './FoodItem.css';
import { assets } from '../../assets/assets';
const FoodItem = ({ id, name, price, description, image }) => {
  return (
    
    <div className='food-item'>
        <h1>hello</h1>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt={name} />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className='food-item-description'>
          {description}
        </p>
        <p className='food-item-price'>RS {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
