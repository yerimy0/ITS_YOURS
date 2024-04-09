import { configureStore, createSlice } from '@reduxjs/toolkit';

const register = createSlice({
	name: 'register',
	initialState: {
		prodName: '',
		prodPrice: 0,
		prodAuth: '',
		prodPub: '',
		prodStatus: '',
		prodDisc: '',
		uploadImgUrls: ['', '', ''],
	},
	reducers: {
		onChange(state, action) {
			const { value, name } = action.payload;
			state.name = value;
		},
		handleImageChange(state, action) {
			state.uploadImgUrls = action.payload;
		},
	},
});

export let { onChange, handleImageChange } = register.actions;

export default configureStore({
	reducer: {
		register: register.reducer,
	},
});
