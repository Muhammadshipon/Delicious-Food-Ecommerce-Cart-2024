import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa';


const Headers = () => {
  
  return (
    <Navbar className="bg-red-600 text-white h-16 text-3xl font-bold">
    <Container>
      <h3>Delicious Food</h3>
      <div>
        <div className='w-6 text-sm h-6 bottom-8 right-16 rounded-full bg-black text-red-500 flex items-center justify-center absolute'>5</div>
        <span className='' ><FaShoppingCart /></span>
      </div>
    </Container>
  </Navbar>
  );
};

export default Headers;