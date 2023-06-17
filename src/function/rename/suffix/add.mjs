import { function_rename_single } from '../single.mjs';
import { string_identifier_sub_is } from '../../../string/identifier/sub/is.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_name_separator } from '../../name/separator.mjs';
import { list_join } from '../../../list/join.mjs';
export async function function_rename_suffix_add(function_name_old, suffix) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_sub_is
    ]);
    let function_name_new = list_join([
        function_name_old,
        suffix
    ], function_name_separator());
    return await function_rename_single(function_name_old, function_name_new);
}