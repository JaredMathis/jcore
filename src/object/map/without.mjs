import { defined_is } from '../../defined/is.mjs';
import { list_is } from '../../list/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_contains } from '../../list/contains.mjs';
import { object_merge_filtered } from '../merge/filtered.mjs';
export function object_map_without(object, values_without) {
    arguments_assert(arguments, [
        defined_is,
        list_is
    ]);
    return object_merge_filtered(object, key => !list_contains(values_without, key), {});
}