import { js_suffix_get } from '../../../js/suffix/get.mjs';
import { function_add_property_generic } from './generic.mjs';
import { js_code_call_expression_object_property_get } from '../../../js/code/call/expression/object/property/get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
export async function function_add_property_get(property_prefix, property_name) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    const method = js_suffix_get();
    let lambda = (property_prefix, property_name_get) => js_code_call_expression_object_property_get(property_prefix, property_name_get);
    let v = await function_add_property_generic(property_prefix, property_name, lambda, method, false);
    return v;
}