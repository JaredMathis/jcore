import { function_arguments_assert_extra_next } from '../../../next.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
import { function_metadata_add } from '../../../../../../metadata/add.mjs';
export async function function_arguments_assert_extra_next_add_metadata_none() {
    arguments_assert(arguments, []);
    let next_function_name = await function_arguments_assert_extra_next();
    await function_metadata_add(next_function_name, 'arguments_assert_none');
}