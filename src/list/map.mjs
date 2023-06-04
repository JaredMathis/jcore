import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_is } from './is.mjs';
if (false) {
    function_is
}
export function list_map(list, mapper) {
    arguments_assert(arguments, [
        list_is,
        tautology
    ]);
    return list.map(element => mapper(element));
    metadata([]);
}