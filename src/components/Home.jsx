import "./style.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from "./CartData";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/App/Features/cartSlice";
import toast from 'react-hot-toast';
const Home = () => {
  const [cardsData,setCardsData] = useState(Cardsdata)
  const dispatch = useDispatch();
  const hanldeAddToCart = (item)=>{
    dispatch(addToCart(item));
    toast.success('Add To Cart Successfully')
  }
  return (
    <>
     <h3 className="text-2xl font-bold my-3 text-center">Test our delicious Food</h3>
    <div className="flex justify-center items-center">
      
      <section className="grid mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-around ">
   {
     cardsData?.map(card=>{
       const {id,
         dish,
         imgdata,
         address,
         delimg,
         somedata,
         price,
         rating,
         arrimg,
          qnty} =card;
       return (
         <Card className="max-h-[430px]" key={id} style={{ width: '18rem' }}>
           <Card.Img variant="top" src={imgdata} className="h-[200px]"/>
           <Card.Body>
             <Card.Title>{dish}</Card.Title>
             <Card.Text>
               {somedata}
             </Card.Text>
             <p>Price: {price}$</p>
             <Button className="mt-2 w-full"
             onClick={()=>hanldeAddToCart(card)} variant="primary">Add To Cart</Button>
           </Card.Body>
         </Card>
       );
     })
   }
      </section>
       </div>
    </>
  );
};

export default Home;