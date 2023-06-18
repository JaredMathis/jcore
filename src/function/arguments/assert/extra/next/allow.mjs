import { function_name_without_prefix } from '../../../../name/without/prefix.mjs';
import { metadata_arguments_assert_extra_allow } from '../../../../../metadata/arguments/assert/extra/allow.mjs';
import { function_arguments_assert_extra_next } from '../next.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_metadata_add } from '../../../../metadata/add.mjs';
import { metadata_prefix } from '../../../../../metadata/prefix.mjs';
export async function function_arguments_assert_extra_next_allow() {
    arguments_assert(arguments, []);
    let next_function_name = await function_arguments_assert_extra_next();
    let v = metadata_prefix();
    let without_prefix = function_name_without_prefix(metadata_arguments_assert_extra_allow, v);
    await function_metadata_add(next_function_name, without_prefix);
}