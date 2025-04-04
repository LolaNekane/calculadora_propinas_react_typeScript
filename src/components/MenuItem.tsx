import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
}
export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button
    className="border-2 border-teal-400 hover:bg-teal-100 w-full p-5 flex justify-between rounded-xl cursor-pointer"
    onClick={() => addItem(item) }>
      <p>{item.name} </p>
      <p className="font-black">{item.price} €</p>
    </button>
  )
}

