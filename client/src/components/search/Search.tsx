import React, { Fragment, useEffect, useState } from 'react';
import * as SearchForm from './Search.styled'

import ItemList from '../itemList/ItemList'
import * as Btn from '../Btn/Btn.styled'
import { useAppDispatch, useAppSelector } from '../../hooks'

import { setKeyword, asyncFakeGetSiteList, seletSearchItems } from './searchSlice'


const Search = () => {
    const dispatch = useAppDispatch()
    const searchItems = useAppSelector(seletSearchItems);

    const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setKeyword(e.target.value))

    const enterKeyPress = (e: any) => {
        console.log(e)

        return e.key === 'Enter' ? onChangeKeyword(e) : null
    }

    const searchItem = (loadMore: boolean) => dispatch(asyncFakeGetSiteList(loadMore))

    return (
        <>
            <SearchForm.SearchWrap title="Search">
                <SearchForm.InpSearch onChange={onChangeKeyword} onKeyPress={enterKeyPress} />
                <SearchForm.BtnSeach onClick={() => searchItem(false)}>Search</SearchForm.BtnSeach>
            </SearchForm.SearchWrap>
            {searchItems.length > 0 ?
                <Fragment>
                    <ItemList itemList={searchItems} />
                    <Btn.loadMore onClick={() => searchItem(true)}>load more </Btn.loadMore>
                </Fragment>
                : null
            }
        </>
    )
}

export default Search

