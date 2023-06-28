import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { function_name_separator } from '../../function/name/separator.mjs';
export function version_collection_repository(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let fns = function_name_separator();
    let database_collection_name = `repository${ fns }${ repository_name }`;
    return database_collection_name;
    metadata([]);
}