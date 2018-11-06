import { createStore } from 'redux';

function tempReducer (){
    return null;
}

const rootStore = createStore(
    tempReducer,
    window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_()
    
    );

export default rootStore;