import { FaArchive, FaMinus, FaPlus } from "react-icons/fa";
import "./cartStyle.css"
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementTheCartItem, deleteAllTheCarts, removeTheCart } from "../Redux/App/Features/cartSlice";
import toast from 'react-hot-toast';

const CartDetails = () => {
  const carts = useSelector(state=>state.allCart.carts);
  const dispatch = useDispatch();
  const handleIncrement =(item)=>{
    dispatch(addToCart(item));
  }
  const handleRemoveTheCart =id=>{
    dispatch(removeTheCart(id));
    toast.success('Remove the cart successfully')
  }
  const handleDecrementTheCart=id=>{
    dispatch(decrementTheCartItem(id));

  }
 
  const totalPrice =carts.reduce((sum,current)=>sum+current.qnty*current.price,0)
  const totalQuantity =carts.reduce((sum,current)=>sum+current.qnty,0)
  return (
    <div className="flex justify-center mt-20" >
             {/* cart details section  */}
     <section className=" lg:w-1/2 mx-10 w-full md:w-3/4 ">
         {/* header  */}
   <div className="bg-red-700 py-2 px-10 flex justify-between items-center shadow-2xl">
    <p className="text-white text-2xl">Cart Calculation <span>({carts.length})</span></p>
    {
      carts?.length?
      <button onClick={()=>{dispatch(deleteAllTheCarts()); toast.success('Delete All the Cart')}} className="btn bg-orange-500">
      <span><FaArchive></FaArchive></span>
     <span>Empty Cart</span>
    </button> : ''
    }
   </div>
          
   <div>
{/* details  */}
{
    carts.length===0?<table className="table shadow-md">
    <tbody>
      <tr>
        <div className="flex justify-center items-center ">
          <div className='flex  flex-col items-center my-8 text-gray-400'>
          <FaCartShopping className="text-6xl text-center" />
          <p className="my-2">Your Cart is empty</p>
          </div>
        </div>
      </tr>
    </tbody>
    </table> : 
    <table className="table">
      <thead>
        <tr className="w-full">
          <th >Action</th>
          <th >Product</th>
          <th >Name</th>
          <th >Price</th>
          <th className="text-center">Qty</th>
          <th className="w-2/5 text-center">Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {
          carts.map((item,idx)=>
           <tr key={idx} className="w-full ">
            <td><button onClick={()=>handleRemoveTheCart(item.id)} className="btn btn-circle btn-sm text-red-700"><FaArchive/></button></td>
            <td><img src={item.imgdata} alt="food" className="w-[30px] h-[30px]"/></td>
            <td className="w-3/6"><p>{item.dish}</p></td>
            <td>{item.price}</td>
            <td className="w-6/6">
              <div className=" w-full gap-2 flex items-center">
                <span onClick={()=>handleIncrement(item)} className="btn btn-sm"><FaPlus/></span>
                <span>
                {item.qnty}
              </span>
              <span onClick={item.qnty>1?()=>handleDecrementTheCart(item.id):()=>handleRemoveTheCart(item.id)} className="btn btn-sm">
                <FaMinus/>
              </span>
              </div>
             
            </td>
            <td className="text-end pr-4">${item.qnty*item.price} </td>
           </tr>
          )
        }
      </tbody>
      <tfoot >
        <tr  className="w-full">
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th className="
           ">Item In Cart : <span>
            {totalQuantity}
            </span></th>
            <th className=" ">Total Price : <span>
            {totalPrice}
            </span></th>
        </tr>
      </tfoot>
    </table>
    
   }       
   </div>
   
     </section>
    </div>
  );
};

export default CartDetails;