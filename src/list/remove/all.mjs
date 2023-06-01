import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_remove } from '../remove.mjs';
export function list_remove_all(list, values) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    for (let v of values) {
        list_remove(list, v);
    }
    metadata([]);
}