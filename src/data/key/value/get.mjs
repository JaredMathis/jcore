import { metadata } from '../../../metadata.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
import { data_map } from '../../map.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { string_is } from '../../../string/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function data_key_value_get(key, value) {
    arguments_assert(arguments, [
        string_is,
        defined_is
    ]);
    await data_map(map);
    function map(data) {
        object_property_set(data, key, value);
    }
    metadata([]);
}