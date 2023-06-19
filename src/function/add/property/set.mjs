import { js_code_call_expression_object_property_set } from '../../../js/code/call/expression/object/property/set.mjs';
import { function_add_property_generic } from './generic.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_add_property_set(property_prefix, property_name) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    const method = 'set';
    let lambda = js_code_call_expression_object_property_set;
    return await function_add_property_generic(property_prefix, property_name, lambda, method, false);
}