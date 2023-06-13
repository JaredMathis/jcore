import { function_arguments_assert_default_generic } from './generic.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { count } from '../../../../count.mjs';
export async function function_arguments_assert_default_count() {
    arguments_assert(arguments, []);
    let result = await count_async(async counter => {
        await function_arguments_assert_default_generic(on_equals);
        async function on_equals(function_name) {
            counter()
            return false;
        }
    })
    return result;
}