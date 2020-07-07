let initialState = {
    isLoading: false,
    isError: false,
    errorMsg: "",
    data: {}
}

let crud = (state = initialState, action) => { 
    switch (action.type) {
        case 'RECEIVE_DATA_PENDING':
        return{
            ...state,
            isLoading: true,
            isError: false
        }
        case 'RECEIVE_DATA_REJECTED':
        return{
            ...state,
            isLoading: true,
            isError: false
        }
        case 'RECEIVE_DATA_FULFILLED':
            return{
                ...state,
                isLoading: true,
                isError: true,
                data: action.payload.data.data
            }
            default: {
                return state
            }
    }
}

export default crud