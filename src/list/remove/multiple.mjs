import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_remove } from '../remove.mjs';
export function list_remove_multiple(list, values) {
    arguments_assert(arguments, [
        list_is,
        list_is
    ]);
    for (let v of values) {
        list_remove(list, v);
    }
    metadata([]);
}