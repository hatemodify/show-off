import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../hooks'
import { asyncGetItemDetail, selectItemDetail } from './ItemList.slice'

import ItemThumb from './components/ItemThumb'



const ItemDetail = () => {
    const dispatch = useAppDispatch()
    const { detailId }: any = useParams();
    const itemDetail = useAppSelector(selectItemDetail);

    useEffect(() => {
        dispatch(asyncGetItemDetail(detailId));
    }, [dispatch]);

    return (
        <>
            <ItemThumb itemDetail={itemDetail} />
        </>
    )
}

export default ItemDetail