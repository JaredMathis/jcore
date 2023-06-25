import { defined_is } from '../../../../defined/is.mjs';
import { list_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_add } from '../../../add.mjs';
import { list_contains } from '../../../contains.mjs';
export function list_add_if_not_exists(list, element) {
    arguments_assert(arguments, [
        list_is,
        defined_is
    ]);
    let v = list_contains(list, element);
    if (v) {
        return;
    }
    list_add(list, element);
    metadata([]);
}