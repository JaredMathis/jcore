import { version_collection_repository } from './collection/repository.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function version_pull(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let database_collection_name = version_collection_repository(repository_name);
}