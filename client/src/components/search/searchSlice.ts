import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { SearchInterface } from './Search.interface';

const INITIAL_STATE = {
	display: 0,
	items: [],
	lastBuildDate: '',
	start: 0,
	total: 0,
	keyword: '',
	pageNo: 1,
};

const URL = 'http://localhost:9998/showoff/related/';

export const asyncFakeGetSiteList = createAsyncThunk(
	'search/getItemList',
	async (state) => {
		console.log(state);
		// const result = await axios.get(`${URL}${keyword}/${pageNo}`);
		// return result.data.items;
		// return response.data;
	}
);

export const searchSlice = createSlice({
	name: 'search',
	initialState: INITIAL_STATE,
	reducers: {
		render: (state) => {
			console.log(state);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(asyncFakeGetSiteList.pending, (state) => {
				console.log(state);
			})
			.addCase(asyncFakeGetSiteList.fulfilled, (state, action) => {
				console.log(action);
			});
	},
});

// export const userLoginSlice = createSlice({
// 	name: 'bridge',
// 	initialState: INITIAL_STATE,
// 	reducers: {
// 		render: (state) => {
// 			state.status = ASYNC_STATUS.IDLE;
// 		},
// 	},
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(asyncFakeGetSiteList.pending, (state) => {
// 				state.status = ASYNC_STATUS.PENDING;
// 			})
// 			.addCase(
// 				asyncFakeGetSiteList.fulfilled,
// 				(state, action: PayloadAction<T_SiteList>) => {
// 					state.status = ASYNC_STATUS.IDLE;
// 					state.siteList = action.payload;
// 				}
// 			);
// 	},
// });

export const { render } = searchSlice.actions;

// export const selectStatus = (state) => state.bridge.status;
// export const selectSiteList = (state) => state.bridge.siteList;

export default searchSlice.reducer;
