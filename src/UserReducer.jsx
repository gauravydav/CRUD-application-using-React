import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email,phoneNumber } = action.payload;
      console.log(id, name, email,phoneNumber);

      const updatedState = state.map((user) => {
        if (user.id == id) {
          return {
            ...user,
            name: name,
            email: email,
            phoneNumber:phoneNumber,
          };
        }
        
        return user;
      });
      // Return a new array instead of the previous state array
      console.log(...updatedState)
      return [...updatedState];
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const updatedState = state.filter(user => user.id !== id);
    
      return updatedState;
    }
    
  }
    
});
export const { addUser, updateUser,deleteUser} = userSlice.actions;
export default userSlice.reducer;
