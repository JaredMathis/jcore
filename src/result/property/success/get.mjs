import { result_property_success } from '../success.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { defined_is } from '../../../defined/is.mjs';
export function result_property_success_get(result) {
    arguments_assert(arguments, [defined_is]);
    let v = result_property_success();
    let v_2 = object_property_get(result, v);
    return v_2;
}