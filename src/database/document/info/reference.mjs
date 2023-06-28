import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { database_reference } from '../../reference.mjs';
export function database_document_info_reference(db, database_collection_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let document_path_info = `info`;
    let info_refererence = database_reference(db, database_collection_name, document_path_info);
    return info_refererence;
    metadata([]);
}