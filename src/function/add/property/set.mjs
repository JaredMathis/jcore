import { metadata } from '../../../metadata.mjs';
import { js_code_call_expression_object_property_set } from '../../../js/code/call/expression/object/property/set.mjs';
import { function_add_property_generic } from './generic.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_add_property_set(property_prefix, property_name) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    const method = 'set';
    let lambda = js_code_call_expression_object_property_set;
    let v_2 = true;
    let v = await function_add_property_generic(property_prefix, property_name, lambda, method, v_2);
    return v;
    metadata([]);
}