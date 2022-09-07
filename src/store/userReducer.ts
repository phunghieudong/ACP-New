import {createSlice, PayloadAction} from '@reduxjs/toolkit'; // Import redux toolkit

// Khởi tạo giá trị mặc định cho state
// "as IUser" để gán type cho initialState là IUser
// Cũng có thể gán type bằng "const initialState: IUser = {...}"
const initialState = {
  ID: '',
  Phone: '',
  Email: '',
  FullName: '',
  BirthDate: '',
  Address: '',
  Role: 'other',
  Status: 'other',
} as IUser;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Gán giá trị vào state, giá trị vào là "state" và "payload"
    // "state" là state của slice, payload là giá trị nạp vào
    setUser: (state: IUser, {payload}: PayloadAction<IUser>) => {
      state = payload;
    },
  },
});

// Export tụi nó ra
export const {setUser} = userSlice.actions;
export default userSlice.reducer;

// Xem thêm: https://redux-toolkit.js.org/tutorials/quick-start
