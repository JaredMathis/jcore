import { function_is } from './function/is.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export function count(then) {
    arguments_assert(arguments, [function_is]);
    let result = 0;
    then(counter);
    function counter() {
        result++;
    }
    return result;
}