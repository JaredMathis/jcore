import { list_each_with_index_async } from '../each/with/index/async.mjs';
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
    if (false) {
        await list_each_with_index_async(array, async a => {
            if (await filter(a)) {
                list_add(result, a);
            }
        });
    }
    return result;
    metadata([]);
}