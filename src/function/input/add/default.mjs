import { metadata } from '../../../metadata.mjs';
import { function_input_add_generic_last } from './generic/last.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { string_is } from '../../../string/is.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { function_name_get } from '../../name/get.mjs';
export async function function_input_add_default(function_name, input_name, input_value_default) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is,
        string_is
    ]);
    let v = function_name_get(arguments_assert_todo);
    await function_input_add_generic_last(function_name, input_name, v, input_value_default);
    metadata([]);
}