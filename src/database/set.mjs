import { database_reference } from './reference.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function database_set(db_or_transaction, collection_path, document_path, document_data) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    await database_reference(db_or_transaction, collection_path, document_path).set(document_data);
}