import { metadata } from '../metadata.mjs';
import { database_reference } from './reference.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { database_reference_create } from './reference/create.mjs';
export async function database_create(db, transaction, collection_path, document_path, document_data) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    const reference = database_reference(db, collection_path, document_path);
    await database_reference_create(transaction, reference, document_data);
    metadata([]);
}