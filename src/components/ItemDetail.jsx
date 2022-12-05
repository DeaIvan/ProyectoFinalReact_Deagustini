import '../App.css';

const ItemDetail = ({ item }) => {
    return (
        <>
        {
        item.length > 0
        ? item.map(item => <ItemD key={item.id} id={item.id} title={item.title} price={item.price} image={item.image[0]} stock={item.stock} description={item.description}/>)
        : <p className="load">Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;