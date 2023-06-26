import { metadata } from '../../../metadata.mjs';
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
    let v_4 = function v(key) {
        let v_2 = list_contains(excluded, key);
        let v_3 = not(v_2);
        return v_3;
    };
    let v_5 = {};
    object_merge_filtered(value, v_4, v_5);
    metadata([]);
}