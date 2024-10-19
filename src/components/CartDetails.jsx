import { FaArchive, FaMinus, FaPlus } from "react-icons/fa";
import "./cartStyle.css"
import { FaCartShopping } from "react-icons/fa6";

const CartDetails = () => {
  const arr = [0,1];
  return (
    <div className="flex justify-center mt-20" >
             {/* cart details section  */}
     <section className=" lg:w-1/2 mx-10 w-full md:w-3/4 ">
         {/* header  */}
   <div className="bg-red-700 py-2 px-10 flex justify-between items-center shadow-2xl">
    <p className="text-white text-2xl">Cart Calculation <span>(5)</span></p>
    {
      arr.length?
      <button className="btn bg-orange-500">
      <span><FaArchive></FaArchive></span>
     <span>Empty Cart</span>
    </button> : ''
    }
   </div>
          
   <div>
{/* details  */}
{
    arr.length===0?<table className="table shadow-md">
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
          <th >Qty</th>
          <th className="w-2/5 text-center">Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {
          arr.map((item,idx)=>
           <tr key={idx} className="w-full ">
            <td><button className="btn btn-circle btn-sm text-red-700"><FaArchive/></button></td>
            <td><img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" alt="food" className="w-[30px] h-[30px]"/></td>
            <td><p>Panjabi</p></td>
            <td>350</td>
            <td className="w-3/6">
              <div className=" w-full gap-2 flex items-center">
                <span className="btn btn-sm"><FaPlus/></span>
                <span>
                7
              </span>
              <span className="btn btn-sm">
                <FaMinus/>
              </span>
              </div>
             
            </td>
            <td className="text-end pr-4">$ 500 </td>
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
            48
            </span></th>
            <th className=" ">Total Price : <span>
            456
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