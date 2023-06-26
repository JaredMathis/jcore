import { metadata } from '../metadata.mjs';
import { version_push_generic } from './push/generic.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function version_push(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let preview = false;
    let v = await version_push_generic(repository_name, preview);
    return v;
    metadata([]);
}