import { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
const FoodDisplay = () => {

    const {food_list} = useContext(StoreContext)
  return ( 
    <div className='food-display' id='food-display'>FoodDisplay
        <h2>Top Dishes Near To You</h2>    
    </div>
)
}

export default FoodDisplay