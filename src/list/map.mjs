import { function_is } from '../function/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_is } from './is.mjs';
export function list_map(list, mapper) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    return list.map(element => mapper(element));
    metadata([]);
}