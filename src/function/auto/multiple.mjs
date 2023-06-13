import { function_auto } from '../auto.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
import { list_length_is_0 } from '../../list/length/is/0.mjs';
import { list_is } from '../../list/is.mjs';
export async function function_auto_multiple(function_names) {
    arguments_assert(arguments, [list_is]);
    assert(!list_length_is_0(function_names));
    for (let f of function_names) {
        await function_auto(f);
    }
}