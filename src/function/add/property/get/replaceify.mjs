import { js_identifier_is } from '../../../../js/identifier/is.mjs';
import { function_add_property_get } from '../get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_add_property_get_replaceify(property_prefix, property_name) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    let result = await function_add_property_get(property_prefix, property_name);
    return result;
}