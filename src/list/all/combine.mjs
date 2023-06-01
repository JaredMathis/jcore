import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_add_multiple } from '../add/multiple.mjs';
export function list_all_combine(concats) {
    arguments_assert(arguments, [tautology]);
    let concat = [];
    for (let list of concats) {
        list_add_multiple(concat, list);
    }
    return concat;
    metadata([]);
}