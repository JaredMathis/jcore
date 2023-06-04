import { list_is } from '../../../is.mjs';
import { tautology } from '../../../../tautology.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_get } from '../../../get.mjs';
import { range } from '../../../../range.mjs';
import { list_length } from '../../../length.mjs';
export async function list_each_with_index_async(list, lambda) {
    arguments_assert(arguments, [
        list_is,
        tautology
    ]);
    const r = range(list_length(list));
    for (let index of r) {
        let element = list_get(list, index);
        await lambda(element, index);
    }
}