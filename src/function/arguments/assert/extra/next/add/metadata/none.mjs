import { string_prefix_without } from '../../../../../../../string/prefix/without.mjs';
import { metadata_arguments_assert_none } from '../../../../../../../metadata/arguments/assert/none.mjs';
import { function_arguments_assert_extra_next } from '../../../next.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
import { function_metadata_add } from '../../../../../../metadata/add.mjs';
import { metadata_prefix } from '../../../../../../../metadata/prefix.mjs';
import { function_name_get } from '../../../../../../name/get.mjs';
export async function function_arguments_assert_extra_next_add_metadata_none() {
    arguments_assert(arguments, []);
    let next_function_name = await function_arguments_assert_extra_next();
    let metadata_name = function_name_get(metadata_arguments_assert_none);
    let without_prefix = string_prefix_without(metadata_name, metadata_prefix());
    await function_metadata_add(next_function_name, without_prefix);
}