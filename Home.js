import './Home.css';
import List from './List';
import { FaSearch } from "react-icons/fa";
import Navbar from './Navbar';

const Home = () => {
    return ( 
        <div className="Home">
            <div className="ColumnArrange">
                <Navbar/>
            </div>
            <div className="SearchInput">
                <FaSearch/>
                <input className="SearchInputBox" type="text" placeholder='Search'/>
            </div>
            <div className='IdBox'>
                <List/>
            </div>
        </div>
     );
}
 
export default Home;