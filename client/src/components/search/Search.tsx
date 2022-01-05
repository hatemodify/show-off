import React, { useEffect, useState } from 'react';
import * as SearchForm from './Search.styled'
import axios from 'axios';

import ItemList from '../itemList/ItemList'
import LoadMore from '../Btn/LoadMore';
import * as Btn from '../Btn/Btn.styled'
const URL = 'http://localhost:9998/showoff/related/'

const Search = () => {
    const [keyword, setKeyword] = useState('')
    const [itemList, setItemList] = useState([]);
    const [pageNo, setPageNo] = useState(1)

    const updatePageNo = () => {
        return new Promise<number>(resolve => {
            setPageNo(pageNo + 10)
            resolve(pageNo);
        })

    }

    const onChangeKeyword = (e: { target: { value: any; }; }): void => setKeyword(e.target.value)


    const getItemList = async () => {
        const result = await axios.get(`${URL}${keyword}/${pageNo}`)
        return result.data.items
    }

    const searchItem = async () => {
        setItemList(await getItemList());
        console.log(itemList)
    }


    const loadMoreItem = async () => {
        updatePageNo().then(res => console.log(res))
        const items: any = [...itemList, ...await getItemList()]
        setItemList(items)
    };


    return (
        <>
            <SearchForm.SearchWrap >
                <SearchForm.InpSearch onChange={onChangeKeyword} />
                <SearchForm.BtnSeach onClick={searchItem}>Search</SearchForm.BtnSeach>
            </SearchForm.SearchWrap>
            {itemList.length > 0 ?
                <ItemList itemList={itemList} /> : null
            }
            <Btn.loadMore onClick={loadMoreItem}>load more </Btn.loadMore>
        </>
    )
}

export default Search