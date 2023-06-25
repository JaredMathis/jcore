import { integer_value_0 } from './integer/value/0.mjs';
import { function_is } from './function/is.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export function count(then) {
    arguments_assert(arguments, [function_is]);
    let result = integer_value_0();
    then(counter);
    function counter() {
        result++;
    }
    return result;
}