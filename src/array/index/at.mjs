import { assert } from '../../assert.mjs';
import { object_property_exists } from '../../object/property/exists.mjs';
export function array_index_at(list, index) {
    assert(object_property_exists(list, index));
    return list[index];
}