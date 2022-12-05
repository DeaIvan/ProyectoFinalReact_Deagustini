import '../App.css';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    return (
        <>
        {
        item && item.image
        ?
        <div className="product-container-detail">
            <div className="product-img-detail">
                <img src={item.image} alt="" />
            </div>
            <div className="product-info-detail">
                <h3 id="title-detail">{item.title}</h3>
                <p id="price-detail">Precio: ${item.price}</p>
                <p id="stock-detail">Stock: {item.stock}</p>
                <p id="desc-detail">Descripcion: {item.description}</p>
                <div className="product-detalle-detail">
                    <Link to='/'><button>Agregar al Carrito</button></Link>
                </div>
            </div>
        </div>
        : <p className='load'>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;