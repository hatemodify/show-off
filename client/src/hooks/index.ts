import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { appStore } from '../store';

export type T_AppDispatch = typeof appStore.dispatch;
export type T_RootState = ReturnType<typeof appStore.getState>;

export const useAppDispatch = () => useDispatch<T_AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<T_RootState> = useSelector;
