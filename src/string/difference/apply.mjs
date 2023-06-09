import { object_property_get } from '../../object/property/get.mjs';
import { list_single } from '../../list/single.mjs';
import { string_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function string_difference_apply(string_old, string_new) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let file_name = '';
    let header = '';
    let patch = Diff.createPatch(file_name, string_old, string_new, header, header);
    let structured = Diff.parsePatch(patch);
    let first = list_single(structured);
    let hunks = object_property_get(first, 'hunks');
    return hunks;
}