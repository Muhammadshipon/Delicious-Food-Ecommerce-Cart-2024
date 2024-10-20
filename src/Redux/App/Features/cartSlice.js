import { createSlice}  from"@reduxjs/toolkit"

const initialState ={
  carts:[]
}

// cart slice 
const cartSlice = createSlice({
  name:"cartSlice",
  initialState,
  reducers:{
    // add to cart 
    addToCart:(state,action)=>{
    const itemIndex = state.carts.findIndex(item=>item.id === action.payload.id);
    if(itemIndex >= 0){
      state.carts[itemIndex].qnty += 1;
    }
    else{
      const newItem = {...action.payload,qnty:1}
      state.carts = [...state.carts,newItem]
    }
    console.log(state.carts)
    },
      // Remove the specific cart
   removeTheCart:(state,action)=>{
    const carts = state.carts.filter(cart=>cart.id!==action.payload);
    state.carts = carts ;
   },
        //  decrement the quantity of a cart item 
   decrementTheCartItem:(state,action)=>{
    const itemIndex= state.carts.findIndex(item=>item.id===action.payload);
    if(state.carts[itemIndex].qnty>=1){
      state.carts[itemIndex].qnty-=1;
    }
   },
        // Delete all the cart item from the cart
   deleteAllTheCarts:(state)=>{
    state.carts =[];
   }
  }
});

export const {addToCart,removeTheCart,decrementTheCartItem,deleteAllTheCarts} =cartSlice.actions;
export default cartSlice.reducer;

