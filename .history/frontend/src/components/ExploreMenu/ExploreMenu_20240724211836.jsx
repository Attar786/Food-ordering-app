import './ExploreMenu.css'
import menu_list from '../../assets/assets';

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1 className='explore-menu-title'>Explore our Menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, eos?</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div key={index} className='explore-menu-list-item'>
              <img src={item.menu_image} alt="" />
              <p>{item.menu_image}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu;
