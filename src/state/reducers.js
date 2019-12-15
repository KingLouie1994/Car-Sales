import * as types from "./actionTypes";

const initialCarState = {
  price: 26395,
  name: "2019 Ford Mustang",
  image:
    "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  features: []
};

export function carReducer(state = initialCarState, action) {
  switch (action.type) {
    case types.ADD_ITEM:
      return {
        ...state,
        features: [...state.features, action.payload.feature]
      };
    case types.REMOVE_ITEM:
      return {
        ...state,
        features: state.features.filter(
          feature => feature.id !== action.payload.feature.id
        )
      };
    default:
      return state;
  }
}

const initialAdditionalPrice = 0;

export function additionalPriceReducer(state = initialAdditionalPrice, action) {
  switch (action.type) {
    case types.ADD_ITEM:
      return (state += action.payload.feature.price);
    case types.REMOVE_ITEM:
      return (state -= action.payload.feature.price);
    default:
      return state;
  }
}

const initialStore = [
  { id: 1, name: "V-6 engine", price: 1500 },
  { id: 2, name: "Racing detail package", price: 1500 },
  { id: 3, name: "Premium sound system", price: 500 },
  { id: 4, name: "Rear spoiler", price: 250 }
];

export function storeReducer(state = initialStore, action) {
  switch (action.type) {
    default:
      return state;
  }
}
