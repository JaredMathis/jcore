import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { list_filter_generic } from './generic.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_filter_index(array, filter) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    function argument_binary_second(first, second) {
        return second;
    }
    return list_filter_generic(array, filter, argument_binary_second);
    metadata([metadata_generated()]);
}