import './ExploreMenu.css'
import { menu_list } from '../../assets/assets';
import PropTypes from 'prop-types'
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1 className='explore-menu-title'>Explore our Menu</h1>
      <p className='explore-menu-text'>Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis aspernatur odit accusamus aperiam alias fugit laudantium pariatur maiores ex vitae corrupti aut, facere modi. Dolorem, exercitationem voluptates? Eius aut nobis quam architecto voluptatum velit maiores, dolorem labore sint quod atque quo, corporis nemo nulla placeat tempore recusandae laudantium. Amet eaque magnam doloribus laborum. Vel, earum? ipsum dolor sit, amet consectetur adipisicing elit. Quam, eos?</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}
    ExploreMenu.propTypes = {
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
  };

export default ExploreMenu;
