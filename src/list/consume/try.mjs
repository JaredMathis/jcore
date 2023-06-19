import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { list_consume } from '../consume.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { try_catch } from '../../try/catch.mjs';
export function list_consume_try(list, lambda) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let success = true;
    try_catch(() => list_consume(list, lambda), e => success = false);
    return success;
}