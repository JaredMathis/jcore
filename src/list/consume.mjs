import { function_is } from '../function/is.mjs';
import { list_is } from './is.mjs';
import { error } from '../error.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function list_consume(list, lambda) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    error('todo: list_consume');
}