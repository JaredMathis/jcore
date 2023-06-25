import { not } from '../not.mjs';
import { function_is } from '../function/is.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function list_all(list, predicate) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    for (let a of list) {
        let v = not(predicate(a));
        if (v) {
            return false;
        }
    }
    return true;
}