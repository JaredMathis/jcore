import { function_arguments_assert_extra_next } from '../../../next.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
export async function function_arguments_assert_extra_next_add_metadata_none() {
    arguments_assert(arguments, []);
    let next_function_name = await function_arguments_assert_extra_next();
    console.log(next_function_name);
}