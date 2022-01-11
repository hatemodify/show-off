import React, { useEffect, useState } from 'react'
import ItemList from './components/ItemList'


import { useAppDispatch, useAppSelector } from '../hooks'
import { asyncGetItemList, selectItemList } from './ItemList.slice'



const MainList = () => {
    const dispatch = useAppDispatch()
    const iteList = useAppSelector(selectItemList);
    useEffect(() => {
        dispatch(asyncGetItemList())
    }, [])
    return (
        <>
            <ItemList itemList={iteList} />
        </>
    )
}

export default MainList