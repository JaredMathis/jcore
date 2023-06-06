import { function_arguments_assert_default_generic } from './generic.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_arguments_assert_default_count() {
    arguments_assert(arguments, []);
    let count = 0;
    await function_arguments_assert_default_generic(on_equals);
    async function on_equals(function_name) {
        count++;
        return false;
    }
    return count;
}