import { metadata_generated } from '../metadata/generated.mjs';
import { metadata } from '../metadata.mjs';
import { list_filter_generic } from './filter/generic.mjs';
import { function_is } from '../function/is.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function list_filter(array, filter) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    function added_get(element, index) {
        return element;
    }
    return list_filter_generic(array, filter, added_get);
    metadata([metadata_generated()]);
}