import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_add } from '../add.mjs';
import { list_is } from '../is.mjs';
import { function_is } from '../../function/is.mjs';
export async function list_filter_async(array, filter) {
    arguments_assert(arguments, [
        list_is,
        function_is
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