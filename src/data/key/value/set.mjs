import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
import { data_map } from '../../map.mjs';
export async function data_key_value_set(key, value) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    await data_map(map);
    function map(data) {
        object_property_set(data, key, value);
    }
    metadata([]);
}