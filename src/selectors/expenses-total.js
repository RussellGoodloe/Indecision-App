import { value } from "numeral";

export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, values) => sum + values, 0);
};