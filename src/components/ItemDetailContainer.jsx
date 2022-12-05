import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import fetchData from '../utils/fetchData';
import {useParams} from 'react-router';
import data from '../utils/data.js';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        if (idItem) {
            fetchData(2000, data.filter(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
        } else {
            fetchData(2000, data)
            .then(result => setDato(result))
            .catch(err => console.log(err))
        }
    }, [idItem]);

    return (
            <ItemDetail item={dato}/>
            );
}

export default ItemDetailContainer;