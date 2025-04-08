import { Dispatch } from "react"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
  item: MenuItem,
  dispatch: Dispatch< OrderActions>
}
export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <button
    className="border-2 border-teal-400 hover:bg-teal-100 w-full p-5 flex justify-between rounded-xl cursor-pointer"
    onClick={() => dispatch({type: 'add-item', payload: {item}}) }>
      <p>{item.name} </p>
      <p className="font-black">{item.price} €</p>
    </button>
  )
}

