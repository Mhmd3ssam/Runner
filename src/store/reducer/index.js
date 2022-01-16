const initialState = []

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case'SAVE_TRIP' :return [
            {
            ...action.payload,
          },...state];
    }
    return state;
};