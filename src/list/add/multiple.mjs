import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_add } from '../add.mjs';
import { list_is } from '../is.mjs';
export function list_add_multiple(list, list_other) {
    arguments_assert(arguments, [
        list_is,
        list_is
    ]);
    for (let o of list_other) {
        list_add(list, o);
    }
    metadata([]);
}