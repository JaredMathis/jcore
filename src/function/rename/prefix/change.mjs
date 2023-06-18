import { function_rename_single } from '../single.mjs';
import { string_suffix_replace } from '../../../string/suffix/replace.mjs';
import { list_join } from '../../../list/join.mjs';
import { function_name_separator } from '../../name/separator.mjs';
import { string_identifier_sub_is } from '../../../string/identifier/sub/is.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_rename_prefix_change(function_name_old_without_prefix, prefix_old, prefix_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_sub_is,
        string_identifier_sub_is
    ]);
    let v = function_name_separator();
    let function_name_old = list_join([
        function_name_old_without_prefix,
        prefix_old
    ], v);
    let function_name_new = string_suffix_replace(function_name_old, prefix_old, prefix_new);
    await function_rename_single(function_name_old, function_name_new);
}