import { list_adder_async } from '../adder/async.mjs';
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
    list_adder_async();
    await list_each_with_index_async(array, async (element, index) => {
        if (await filter(element)) {
            list_add(result, element);
        }
    });
    return result;
    metadata([]);
}