import { createSlice } from '@reduxjs/toolkit';

const globalState: any = createSlice({
	name: 'globalState',
	initialState: {
		isWelcome: false,
		top5Course: [],
		noti: [],
		videoCourse: [],
		cart: [],
		order: {},
		discount: {},
		branch: [],
		group: [],
	},
	reducers: {
		setTop5Course: (state, action) => {
			state.top5Course = action.payload;
		},
		setNoti: (state, action) => {
			state.noti = action.payload;
		},
		setWelcome: (state, action) => {
			state.isWelcome = action.payload;
		},
		setVideoCourse: (state, action) => {
			state.videoCourse = action.payload;
		},
		setCart: (state, action) => {
			state.cart = action.payload;
		},
		setOrder: (state, action) => {
			state.order = action.payload;
		},
		setDiscount: (state, action) => {
			state.discount = action.payload;
		},
		setBranch: (state, action) => {
			state.branch = action.payload;
		},
		setGroup: (state, action) => {
			state.group = action.payload;
		},
	},
});

export const { setBranch, setGroup, setTop5Course, setNoti, setWelcome, setDiscount, setVideoCourse, setCart, setOrder } =
	globalState.actions;
export { globalState };
export default globalState.reducer;
