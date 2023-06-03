import { string_is } from '../../../string/is.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
import { data_map } from '../../map.mjs';
export async function data_key_value_set(key, value) {
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