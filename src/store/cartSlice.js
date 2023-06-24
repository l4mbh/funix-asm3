import { createSlice } from "@reduxjs/toolkit";

const cartState = { cartItems: [], cartQuant: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addToCart(state, action) {
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
      state.cartQuant = 0;
      state.cartItems.every((item) => (state.cartQuant += item.quant));
      localStorage.setItem(
        "cart",
        JSON.stringify({ items: state.cartItems, quant: state.cartQuant })
      );
    },
    editCart(state, action) {
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
        state.cartQuant = 0;
        state.cartItems.every((item) => (state.cartQuant += item.quant));
        localStorage.setItem(
          "cart",
          JSON.stringify({ items: state.cartItems, quant: state.cartQuant })
        );
      } else {
        return;
      }
    },
    removeFromCart(state, action) {
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
      state.cartQuant = 0;
      state.cartItems.every((item) => (state.cartQuant += item.quant));
      localStorage.setItem(
        "cart",
        JSON.stringify({ items: state.cartItems, quant: state.cartQuant })
      );
    },
    preloadCart(state, action) {
      state.cartItems = action.payload.items;
      state.cartQuant = action.payload.quant;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
