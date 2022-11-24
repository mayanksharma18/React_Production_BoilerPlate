interface IAppState {
    toDoList: any[];
  }
  const initialState: IAppState = {
    toDoList: []
  };

const counterReducer = (state = 0, action: { type: any; }) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
};
  
export default counterReducer;