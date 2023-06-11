import { metadata_generated } from '../metadata/generated.mjs';
import { metadata } from '../metadata.mjs';
import { list_add } from './add.mjs';
import { function_is } from '../function/is.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function list_map(list, mapper) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let result = [];
    for (let element of list) {
        let mapped = mapper(element);
        list_add(result, mapped);
    }
    return result;
    metadata([metadata_generated()]);
}