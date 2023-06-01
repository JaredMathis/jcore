import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_add } from '../add.mjs';
export async function list_filter_async(array, filter) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let result = [];
    for (let a of array) {
        if (await filter(a)) {
            list_add(result, a);
        }
    }
    return result;
    metadata([]);
}