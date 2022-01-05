import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../components/search/SearchSlice';

export const appStore = configureStore({
	reducer: {
		search: searchSlice,
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
