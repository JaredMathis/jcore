import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_add_multiple } from '../add/multiple.mjs';
import { list_is } from '../is.mjs';
export function list_multiple_combine(concats) {
    arguments_assert(arguments, [list_is]);
    let concat = [];
    for (let list of concats) {
        list_add_multiple(concat, list);
    }
    return concat;
    metadata([]);
}