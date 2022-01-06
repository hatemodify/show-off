import React from 'react'
import * as Item from './ItemList.styled'

interface Item {
    brand: string
    category1: string | null
    category2: string | null
    category3: string | null
    category4: string | null
    hprice: string | null
    image: string
    link: string
    lprice: string
    maker: string
    mallName: string
    productId: string
    productType: string
    title: string
}


interface Items {
    itemList: Array<Item>
}

const ItemList = ({ itemList }: Items) => {
    return (
        <Item.ItemList>
            {itemList.map((item) => (
                <li key={item.productId}>
                    <Item.ItemThumb >
                        <img src={item.image} />
                    </Item.ItemThumb>
                    <Item.ItemTitle >{item.title}</Item.ItemTitle>
                </li>
            ))
            }
        </Item.ItemList>
    )
}


export default ItemList