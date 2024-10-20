import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Headers = () => {
  
  const allCart = useSelector(state=>state.allCart.carts);
  console.log(allCart)
  return (
    <Navbar className="bg-red-600 h-16 text-3xl font-bold">
    <Container>
     <NavLink to='/' > <h3 className='text-white' >Delicious Food</h3></NavLink>
     <NavLink to='/cart-details'>
     <div>
        <div className='w-6 text-sm h-6  rounded-full bg-black text-red-500 flex items-center justify-center relative top-3  left-4'>{allCart.length}</div>
        <span className='' ><FaShoppingCart /></span>
      </div></NavLink>
    </Container>
  </Navbar>
  );
};

export default Headers;