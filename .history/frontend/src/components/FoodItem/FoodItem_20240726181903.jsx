import './FoodItem.css';
import { assets } from '../../assets/assets';
import {add_icon_white} from '../../assets/add_icon_white.png' // Ensure this path is correct and that assets contains rating_starts
import {useState} from 'react'
const FoodItem = ({ id, name, price, description, image }) => {


  const [itemCount, SetItemCount] = useState(0)
  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt={name} />
        {
!itemCount 
?<img className='add' onClick={()=>SetItemCount(prev=>prev+1)} src='{add_icon_white}' alt = ""/>
:<div>

</div>

        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className='food-item-description'>
          {description}
        </p>
        <p className='food-item-price'>RS{price}</p>      </div>
    </div>
  );
};

export default FoodItem;
