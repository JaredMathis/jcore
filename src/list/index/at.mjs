import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { object_property_exists } from '../../object/property/exists.mjs';
export function list_index_at(list, index) {
    assert(object_property_exists(list, index));
    return list[index];
    metadata([]);
}