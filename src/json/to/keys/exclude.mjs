import { not } from '../../../not.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { list_is } from '../../../list/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_merge_filtered } from '../../../object/merge/filtered.mjs';
import { list_contains } from '../../../list/contains.mjs';
export function json_to_keys_exclude(value, excluded) {
    arguments_assert(arguments, [
        defined_is,
        list_is
    ]);
    object_merge_filtered(value, function v(key) {
        return not(list_contains(excluded, key));
    }, {});
}