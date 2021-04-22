const initState = {
    token: null
}

const rootReducer = (state = initState, action) => // const rooReducer = (state = token, action ) => {}
{
    if(action.type === 'add')
    {
        state.token = action.value;
    }
   
   return state;
}


export default rootReducer;