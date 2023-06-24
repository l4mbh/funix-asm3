import { createSlice } from "@reduxjs/toolkit";

const cartState = { cartItems: [], cartQuant: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addToCart(state, action) {
      // Check if item exxisted by ID then change item quanity if existed by item index / push() to array if not existed
      if (
        state.cartItems.find(
          (item) => item.item._id.$oid === action.payload.item._id.$oid
        )
      ) {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.item._id.$oid === action.payload.item._id.$oid
        );
        state.cartItems[itemIndex].quant += action.payload.quant;
      } else {
        state.cartItems.push({
          item: action.payload.item,
          quant: action.payload.quant,
        });
      }
      // Re count the total quantity of items in cart
      state.cartQuant = 0;
      state.cartItems.every((item) => (state.cartQuant += item.quant));
      // Update to localStorage
      localStorage.setItem(
        "cart",
        JSON.stringify({ items: state.cartItems, quant: state.cartQuant })
      );
    },
    editCart(state, action) {
      // Check if item existed by ID then change the item quantity by action 'type' base on item index.
      if (
        state.cartItems.find(
          (item) => item.item._id.$oid === action.payload.item._id.$oid
        )
      ) {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.item._id.$oid === action.payload.item._id.$oid
        );
        if (action.payload.quant.type === "increase") {
          state.cartItems[itemIndex].quant += action.payload.quant.quant;
        } else if (action.payload.quant.type === "decrease") {
          state.cartItems[itemIndex].quant -= action.payload.quant.quant;
        } else if (action.payload.quant.type === "replace") {
          state.cartItems[itemIndex].quant = Number(action.payload.quant.quant);
        }
        // Re count items quant 
        state.cartQuant = 0;
        state.cartItems.every((item) => (state.cartQuant += item.quant));
      // Update to localStorage
        localStorage.setItem(
          "cart",
          JSON.stringify({ items: state.cartItems, quant: state.cartQuant })
        );
      } else {
        return;
      }
    },
    removeFromCart(state, action) {
      // Check if item existed by ID, then use splice() to delete item from array by item index
      if (
        state.cartItems.find(
          (item) => item.item._id.$oid === action.payload._id.$oid
        )
      ) {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.item._id.$oid === action.payload._id.$oid
        );
        state.cartItems.splice(itemIndex, 1);
      }
      // Re count items quant
      state.cartQuant = 0;
      state.cartItems.every((item) => (state.cartQuant += item.quant));
      // Update to localStorage
      localStorage.setItem(
        "cart",
        JSON.stringify({ items: state.cartItems, quant: state.cartQuant })
      );
    },
    preloadCart(state, action) {
      // This use to pre-load cart items from localStorage and update to redux store whenever app is reload/re-open
      state.cartItems = action.payload.items;
      state.cartQuant = action.payload.quant;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
