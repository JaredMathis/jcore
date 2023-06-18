import { data_get } from '../../get.mjs';
import { metadata } from '../../../metadata.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { string_is } from '../../../string/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export async function data_key_value_get(key) {
    arguments_assert(arguments, [string_is]);
    let data = await data_get();
    let v = object_property_get(data, key);
    return v;
    metadata([]);
}