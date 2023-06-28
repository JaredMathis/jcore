import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export async function database_reference_set(transaction, reference, document_data) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = transaction.set(reference, document_data);
    return v;
    metadata([]);
}