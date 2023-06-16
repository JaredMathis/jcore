import { function_name_all } from '../all.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_name_starts_with() {
    arguments_assert(arguments, []);
    let result = await function_name_all();
    return result;
}