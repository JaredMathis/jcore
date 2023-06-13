import { function_input_last_remove } from '../remove.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { range } from '../../../../range.mjs';
export async function function_input_last_3_remove() {
    arguments_assert(arguments, []);
    for (let i of range(3)) {
        await function_input_last_remove(function_name);
    }
}