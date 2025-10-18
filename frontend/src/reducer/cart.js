import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload
      console.log("New Item: ",newItem)
      const existingItem = state.items.find(item => item.itemId === newItem.id)
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id, name: newItem.name, price: newItem.price, quantity: 1, totalPrice: newItem.price
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload
      const itemToBeDeleted = state.items.find(item => id === item.id)
      if (itemToBeDeleted.quantity === 1) {
        state.items = state.items.filter(item => item.id != id)
      } else {
        itemToBeDeleted.quantity--
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
    },
  }
})

export const cartActions = cartSlice.actions

export default cartSlice