import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { stat } from 'fs/promises';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../hooks';
import { appStore } from '../store/index';
// import {
// 	SearchInterface,
// 	SearchItems,
// 	Keyword,
// 	PageNo,
// 	Item,
// } from './Search.interface';

const INITIAL_STATE = {
	itemList: [],
	itemDetail: {},
	itemKeyword: '',
};

const itemApi = (type: string, params?: string | object) =>
	`http://localhost:9998/showoff/${type}${params ? '/' + params : ''}`;

export const asyncGetItemList = createAsyncThunk(
	'itemList/getItemList',
	async () => {
		const result = await axios.get(itemApi('list'));
		return result.data;
	}
);

export const asyncGetItemDetail = createAsyncThunk(
	'itemList/getItemDetail',
	async (detailId: string) => {
		const result = await axios.get(itemApi('detail', detailId));
		return result.data;
	}
);

export const asyncGetRelatedItems = createAsyncThunk(
	'itemList/getItemRelatedItems',
	async (params: { keyword: string; pageNo: number }) => {
		console.log(params);
		const result = await axios.get(itemApi('related', params));

		return result.data;
	}
);

export const itemListSlice = createSlice({
	name: 'search',
	initialState: INITIAL_STATE,
	reducers: {
		setItemKeyword: (state, action: PayloadAction<string>) => {
			const params = { keyword: action.payload, pageNo: 1 };
			state.itemKeyword = action.payload;
			console.log(params);
			asyncGetRelatedItems(params);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(asyncGetItemList.pending, (state, action) => {
				console.log(state);
			})
			.addCase(asyncGetItemList.fulfilled, (state, action) => {
				state.itemList = action.payload;
			})
			.addCase(asyncGetItemDetail.fulfilled, (state, action) => {
				state.itemDetail = action.payload;
			});
	},
});

export const { setItemKeyword } = itemListSlice.actions;

export const selectItemList = (state: any) => state.itemList.itemList;
export const selectItemDetail = (state: any) => state.itemList.itemDetail;

export default itemListSlice.reducer;
