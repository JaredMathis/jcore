import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_is } from './is.mjs';
import { function_is } from '../function/is.mjs';
export function list_filter(list, predicate) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    return list.filter(element => predicate(element));
    metadata([]);
}