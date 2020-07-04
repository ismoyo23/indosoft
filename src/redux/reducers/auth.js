const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: "",
    data: {}
}

const auth = (state = initialState, action) =>{
    switch (action.type) {
        case "LOGIN_PENDING":
        return {
            ...state,
            isLoading: true,
            isError: false
        }
        case "LOGIN_REJECT":
        return {
            ...state,
            isLoading: true,
            isError: false,
            errorMsg: 'Data Rejected'
        }
        case "LOGIN_FULFILED":
        console.log(action.payload);
            
        return {
            ...state,
            isLoading: false,
            isError: false,
            // data: action.payload.data.data[0]
        }
        default: {
            return state
        }
    }
}

export default auth