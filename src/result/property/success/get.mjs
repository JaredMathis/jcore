import { result_property_success } from '../success.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function result_property_success_get() {
    arguments_assert(arguments, []);
    object_property_get(result, result_property_success());
}