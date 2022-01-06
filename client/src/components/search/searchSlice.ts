import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { stat } from 'fs/promises';
import { appStore } from '../../store';

import {
	SearchInterface,
	SearchItems,
	Keyword,
	PageNo,
	Item,
} from './Search.interface';

const INITIAL_STATE: SearchInterface = {
	searchItems: [],
	keyword: '',
	pageNo: 1,
};

const URL = 'http://localhost:9998/showoff/related/';

export const asyncFakeGetSiteList = createAsyncThunk(
	'search/getItemList',
	async (loadMore: boolean = false, { getState }) => {
		const state: any = getState();
		const {
			search: { keyword, pageNo },
		} = state;
		const result = await axios.get(`${URL}${keyword}/${pageNo}`);
		return result.data.items;
	}
);

export const searchSlice = createSlice({
	name: 'search',
	initialState: INITIAL_STATE,
	reducers: {
		render: (state) => {
			console.log(state);
		},
		setKeyword: (state, action: PayloadAction<Keyword>) => {
			state.keyword = action.payload;
		},
		setPageNo: (state, action: PayloadAction<PageNo>) => {
			state.pageNo = action.payload;
		},
		setSearchItems: (state, action: PayloadAction<Array<Item>>) => {
			state.searchItems = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(asyncFakeGetSiteList.pending, (state, action) => {
				action.meta.arg
					? (state.pageNo = state.pageNo + 10)
					: (state.pageNo = 1);
			})
			.addCase(asyncFakeGetSiteList.fulfilled, (state, action) => {
				action.meta.arg
					? (state.searchItems = [...state.searchItems, ...action.payload])
					: (state.searchItems = action.payload);
			});
	},
});

export const { render, setKeyword, setSearchItems, setPageNo } =
	searchSlice.actions;

export const seletSearchItems = (state: any) => state.search.searchItems;
export const seletKeyword = (state: any) => state.search.keyword;

export default searchSlice.reducer;
