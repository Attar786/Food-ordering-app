import { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
const FoodDisplay = () => {

    const {food_list} = useContext(StoreContext)
  return ( 
    <div className='food-display' id='food-display'>FoodDisplay</div>
  )
}

export default FoodDisplay