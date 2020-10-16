import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as transacaoReducer } from "./transacao/reducer";
import thunk from "redux-thunk";

export const store = createStore(
  combineReducers({
    transacao: transacaoReducer
  }),
  applyMiddleware(thunk)
);
