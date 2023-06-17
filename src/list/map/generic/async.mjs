import { list_adder_async } from '../../adder/async.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_each_with_index_async } from '../../each/with/index/async.mjs';
import { list_is } from '../../is.mjs';
import { function_is } from '../../../function/is.mjs';
export async function list_map_generic_async(list, lambda) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    await list_adder_async(async la => {
        await list_each_with_index_async(list, async (element, index) => {
            let mapped = await lambda(element, index);
            la(result, mapped);
        });
    });
    return result;
}