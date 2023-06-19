import { assert } from '../assert.mjs';
import { list_empty } from './empty.mjs';
import { function_is } from '../function/is.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_first_remove } from './first/remove.mjs';
export function list_consume(list, lambda) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    lambda(() => list_first_remove(list));
    assert(list_empty(list));
}