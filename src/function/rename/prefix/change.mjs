import { metadata } from '../../../metadata.mjs';
import { function_rename_suffix_generic } from '../suffix/generic.mjs';
import { string_prefix_replace } from '../../../string/prefix/replace.mjs';
import { js_identifier_sub_is } from '../../../js/identifier/sub/is.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_rename_prefix_change(function_name_old_without_prefix, prefix_old, prefix_new) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_sub_is,
        js_identifier_sub_is
    ]);
    const function_name_old_parts = [
        prefix_old,
        function_name_old_without_prefix
    ];
    let function_name_old_to_new = function v(function_name_old) {
        let v_2 = string_prefix_replace(function_name_old, prefix_old, prefix_new);
        return v_2;
    };
    await function_rename_suffix_generic(function_name_old_parts, function_name_old_to_new);
    metadata([]);
}