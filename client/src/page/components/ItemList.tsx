import React from 'react'
import { Link } from 'react-router-dom'
import * as Item from './ItemList.styled'

interface Item {
    createdAt: string
    description: string
    imageUrl: string
    likes: number
    relatedItems: []
    tag: []
    title: string
    updatedAt: string
    __v: number
    _id: string
}


interface Items {
    itemList: Array<Item>
}

const ItemList = ({ itemList }: Items) => {

    console.log(itemList)


    return (
        <Item.ItemList>
            {itemList.map((item) => (
                <li key={item._id}>
                    <Link to={`/detail/${item._id}`}>
                        <img src={item.imageUrl} />
                    </Link>
                    <Item.ItemTitle >{item.title}</Item.ItemTitle>
                    <Item.ItemDesc>{item.description}</Item.ItemDesc>
                </li>
            ))
            }
        </Item.ItemList>
    )
}


export default ItemList