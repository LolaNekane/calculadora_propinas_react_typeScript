import {menuItems} from './data/db'
import MenuItem from './components/MenuItem'
import useOrder from './hook/useOrder'
import OrderContent from './components/OrderContent'
import OrderTotals from './components/OrderTotals'
import TipPercentageForm from './components/TipPercentageForm'

function App() {

  const {addItem, order, removeItem, tip, setTip, placeOrder} = useOrder()

  return (
    <>
      <header className="bg-teal-600 py-5">
        <h1 className="text-center text-4xl font-bold font-mono uppercase">Calculadora de propina y consumo</h1>
      </header>

      <main className='max-w-7xl mx-auto mt-20 pt-20 grid md:grid-cols-2 font-mono'>

        <div className='p-5'>
         <h2 className='text-4xl font-black'>Menú</h2>
         <div className='space-y-8 mt-10'>
          {menuItems.map(item => (
            <MenuItem
              key={item.id}
              item={item} 
              addItem={addItem}/>
          ))}
         </div>
        </div>

        <div className='border border-dashed border-slate-300 rounded-lg space-y-10 p-5'>
          {order.length ? (
            <>
              <OrderContent
                order={order}
                removeItem={removeItem}
              />
    
              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />
    
              <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className="text-center">La orden está vacia</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
