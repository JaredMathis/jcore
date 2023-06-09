import { boolean_value_false } from '../../../boolean/value/false.mjs';
import { metadata } from '../../../metadata.mjs';
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
    let lambda = function v_3(property_prefix, property_name_get) {
        let v_4 = js_code_call_expression_object_property_get(property_prefix, property_name_get);
        return v_4;
    };
    let v_2 = boolean_value_false();
    let v = await function_add_property_generic(property_prefix, property_name, lambda, method, v_2);
    return v;
    metadata([]);
}