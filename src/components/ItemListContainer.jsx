import { useEffect, useState } from 'react';
import ItemList from './ItemList.jsx';
import fetchData from '../utils/fetchData';
import {useParams} from 'react-router'
import data from '../utils/data.js';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();
    console.log(idCategory);
    //componentDidMount
    useEffect(() => {
            fetchData(2000, data.filter(item => {
                if (idCategory === undefined) return item;
                return item.categoryID === parseInt(idCategory)
            }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);

    return (
            <ItemList item={datos}/>
            );
}

export default ItemListContainer;