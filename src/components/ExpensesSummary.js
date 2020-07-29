import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

const ExpensesSummary = ({ expenseCount = 0, expensesTotal = 0 }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0, 0.00');
    return (
        <div>
            <h3>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h3>
        </div>
    );
};
const mapStatetoProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    };
};
export default connect(mapStatetoProps)(ExpensesSummary);