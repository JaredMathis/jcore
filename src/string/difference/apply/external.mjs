import { metadata } from '../../../metadata.mjs';
import { object_merge } from '../../../object/merge.mjs';
import { string_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_is } from '../../../list/is.mjs';
import * as Diff from 'diff';
export function string_difference_apply_external(string_old, hunks) {
    arguments_assert(arguments, [
        string_is,
        list_is
    ]);
    let patch = {
        'oldFileName': '',
        'oldHeader': '',
        'newFileName': '',
        'newHeader': ''
    };
    object_merge({ hunks }, patch);
    let string_new = Diff.applyPatch(string_old, patch);
    return string_new;
    metadata([]);
}