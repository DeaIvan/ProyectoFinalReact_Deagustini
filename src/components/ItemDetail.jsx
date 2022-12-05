import '../App.css';

const ItemDetail = ({ item }) => {
    return (
        <>
        {
        item && item.image
        ?
        <div className="product-container">
            <div className="product-img">
                <img src={item.image} alt="" />
            </div>
            <div className="product-info">
                <h3 id="title">{item.title}</h3>
                <p id="price">Precio: ${item.price}</p>
                <p id="stock">Stock: {item.stock}</p>
                <p id="desc">Descripcion: {item.description}</p>
            </div>
        </div>
        : <p className='load'>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;