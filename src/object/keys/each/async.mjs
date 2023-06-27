import { metadata } from '../../../metadata.mjs';
import { object_property_get } from '../../property/get.mjs';
import { object_keys } from '../../keys.mjs';
import { function_is } from '../../../function/is.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function object_keys_each_async(object, lambda_value_key) {
    arguments_assert(arguments, [
        defined_is,
        function_is
    ]);
    for (let key of object_keys(object)) {
        let value = object_property_get(object, key);
        await lambda_value_key(value, key);
    }
    metadata([]);
}