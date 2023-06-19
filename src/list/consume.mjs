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
    let exceeded = false;
    lambda(() => {
        if (list_empty(list)) {
            exceeded = true;
            return null;
        } else {
            return list_first_remove(list);
        }
    });
    return !exceeded && list_empty(list);
}