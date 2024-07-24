import {useState} from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import './Home.css'

const Home = () => {
    const [category , setCategory ] = useState('All')
  return (
    <>
<Header/>
<ExploreMenu category={category} setCategory={setCategory}/>
</>
)
}

export default Home