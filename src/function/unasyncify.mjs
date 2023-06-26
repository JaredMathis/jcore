import { boolean_value_false } from '../boolean/value/false.mjs';
import { metadata } from '../metadata.mjs';
import { function_unasyncify_generic } from './unasyncify/generic.mjs';
import { js_identifier_is } from '../js/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function function_unasyncify(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let only_if_needed = boolean_value_false();
    await function_unasyncify_generic(function_name, only_if_needed);
    metadata([]);
}