import '../App.css'

function CartWidget(){
  return (
      <a className='cart' href="#">
        <span className='number'>4</span>
        <span className="material-symbols-rounded">shopping_cart</span>
      </a>
  )
}

export default CartWidget;    