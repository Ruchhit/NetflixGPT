 import createSlice from 'react-redux';
 
 const userSice = createSlice({
    name : "user",
    initialState : null,
    reducers : {
        addUser : (state , action)=>{return action.payload},
        removeUser : (state , action) => {return null},
    }
 });
 export const{addUser,removeUser} = userSice.action;
 export default userSice.reducers;