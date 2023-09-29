import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type testType = {
	test: string;
};

const initialState: testType = {
	test: 'test',
};

const Slice = createSlice({
	name: '',
	initialState,
	reducers: {
		testReducer(state, action: PayloadAction<testType>) {
			state.test = action.payload.test;
		},
	},
});

export const {} = Slice.actions;
export default Slice.reducer;
