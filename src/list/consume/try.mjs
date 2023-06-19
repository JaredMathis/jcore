import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { list_consume } from '../consume.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_consume_try(list, lambda) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let result = list_consume(list, lambda);
    return result;
}