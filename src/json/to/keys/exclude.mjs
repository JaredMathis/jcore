import { list_is } from '../../../list/is.mjs';
import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_merge_filtered } from '../../../object/merge/filtered.mjs';
import { list_contains } from '../../../list/contains.mjs';
export function json_to_keys_exclude(value, excluded) {
    arguments_assert(arguments, [
        tautology,
        list_is
    ]);
    object_merge_filtered(filtered, key => !list_contains(excluded, key), {});
}