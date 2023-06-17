import { list_filter_generic_async } from './generic/async.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_is } from '../is.mjs';
import { function_is } from '../../function/is.mjs';
export async function list_filter_async(array, filter) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    function added_get(element, index) {
        return element;
    }
    return await list_filter_generic_async(array, filter, added_get);
    metadata([]);
}