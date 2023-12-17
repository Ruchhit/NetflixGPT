import {configureStore} from "react-redux";
import userReducer from "./userSlice";

const appStore = configureStore({
    reducer : {
        user : userReducer,
    }
});
export default appStore;