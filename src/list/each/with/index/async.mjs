import { list_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_get } from '../../../get.mjs';
import { range } from '../../../../range.mjs';
import { list_length } from '../../../length.mjs';
import { function_is } from '../../../../function/is.mjs';
export async function list_each_with_index_async(list, lambda) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let v = list_length(list);
    const r = range(v);
    for (let index of r) {
        let element = list_get(list, index);
        await lambda(element, index);
    }
}