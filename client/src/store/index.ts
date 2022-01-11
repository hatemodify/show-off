import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../components/search/searchSlice';
import itemListReducer from '../page/ItemList.slice';

export const appStore = configureStore({
	reducer: {
		search: searchReducer,
		itemList: itemListReducer,
	},
});

// import AppReducer from '../../App.slice';
// import BridgeReducer from '../../views/Bridge/Bridge.slice';
// import UserLoginReducer from '../../views/UserLogin/UserLogin.slice';
// import UserRegisterReducer from '../../views/UserRegister/UserRegister.slice';

// export const appStore = configureStore({
// 	reducer: {
// 		app: AppReducer,
// 		bridge: BridgeReducer,
// 		userLogin: UserLoginReducer,
// 		userRegister: UserRegisterReducer,
// 	},
// });
