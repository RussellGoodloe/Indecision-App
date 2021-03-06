import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
//import { firebase } from './firebase/firebase';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: 5000}));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: -1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 1095}));


const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

// firebase.auth().onAuthStateChanged(() => {
//     if (user) {
//         console.log("logged in");
//     } else {
//         console.log("logged out");
//     }
// });