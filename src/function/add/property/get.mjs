import { function_add_property_generic } from './generic.mjs';
import { js_code_call_expression_object_property_get } from '../../../js/code/call/expression/object/property/get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
export async function function_add_property_get(property_prefix, property_name) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    const method = 'get';
    let lambda = (property_prefix, property_name_get) => js_code_call_expression_object_property_get(property_prefix, property_name_get);
    return await function_add_property_generic(property_prefix, property_name, lambda, method, false);
}