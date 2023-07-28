const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: "BUY_CAKE",
    info: "Action creator for Buying Cake",
  };
}

function buyIceCream() {
  return {
    type: "BUY_ICECREAM",
    info: "Action creator for Buying Icecream",
  };
}

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        // ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleWare(logger));
console.log("Initial state", store.getState());

const unSubscribe = store.subscribe(() => {
//   console.log("updated state ", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unSubscribe()
