import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { object_property_exists } from '../../object/property/exists.mjs';
export function list_index_at(list, index) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    assert(object_property_exists(list, index));
    return list[index];
    metadata([]);
}