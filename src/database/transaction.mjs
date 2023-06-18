import { arguments_assert } from '../arguments/assert.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { function_is } from '../function/is.mjs';
export async function database_transaction(db, transaction_lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is
    ]);
    let v = await db.runTransaction(transaction_lambda);
    return v;
}