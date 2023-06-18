import { argument_binary_second } from '../../../argument/binary/second.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_filter_generic_async } from '../generic/async.mjs';
import { function_is } from '../../../function/is.mjs';
import { list_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function list_filter_index_async(array, filter) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let v = await list_filter_generic_async(array, filter, argument_binary_second);
    return v;
    metadata([]);
}