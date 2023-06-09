import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { object_property_remove } from '../remove.mjs';
import { object_keys } from '../../keys.mjs';
export function object_property_all_delete(node) {
    arguments_assert(arguments, [defined_is]);
    for (let key of object_keys(node)) {
        object_property_remove(node, key);
    }
    metadata([]);
}