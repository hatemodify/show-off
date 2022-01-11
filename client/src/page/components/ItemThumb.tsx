import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { asyncGetRelatedItems, setItemKeyword } from '../ItemList.slice';
import * as Item from './Item.styled'



const ItemTumb = ({ itemDetail }: any) => {
    const [relatedItems, setRelatedItems] = useState<any[]>([])
    const dispatch = useAppDispatch()


    useEffect(() => {
        setRelatedItems(itemDetail.relatedItems)
    }, [itemDetail])

    return (
        <>
            <Item.Thumb>
                <img src={itemDetail.imageUrl} />
                {relatedItems && relatedItems.map((item: any) =>
                    <Item.ItemDot top={item.top} left={item.left} key={item.top} onClick={() => dispatch(setItemKeyword(item.name))} />
                )}
            </Item.Thumb>
        </>
    )
}


export default ItemTumb