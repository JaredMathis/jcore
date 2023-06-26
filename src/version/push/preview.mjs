import { boolean_value_true } from '../../boolean/value/true.mjs';
import { metadata } from '../../metadata.mjs';
import { version_push_generic } from './generic.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function version_push_preview(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let preview = boolean_value_true();
    let v = await version_push_generic(repository_name, preview);
    return v;
    metadata([]);
}