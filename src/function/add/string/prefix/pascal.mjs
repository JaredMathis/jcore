import { boolean_value_true } from '../../../../boolean/value/true.mjs';
import { metadata } from '../../../../metadata.mjs';
import { function_add_string_prefix_pascal_generic } from './pascal/generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_add_string_prefix_pascal(prefix, value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = boolean_value_true();
    await function_add_string_prefix_pascal_generic(prefix, value, v);
    metadata([]);
}