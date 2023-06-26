import { boolean_value_false } from '../../../boolean/value/false.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_dependencies_generic } from '../generic.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_dependencies_non_recursive(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let recursive = boolean_value_false();
    let v = await function_dependencies_generic(function_name, recursive);
    return v;
    metadata([]);
}