import { metadata } from '../../../metadata.mjs';
import { function_rename_suffix_generic } from './generic.mjs';
import { js_identifier_sub_is } from '../../../js/identifier/sub/is.mjs';
import { string_suffix_replace } from '../../../string/suffix/replace.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
export async function function_rename_suffix_change(function_name_old_without_suffix, suffix_old, suffix_new) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_sub_is,
        js_identifier_sub_is
    ]);
    const function_name_old_parts = [
        function_name_old_without_suffix,
        suffix_old
    ];
    let function_name_old_to_new = function v(function_name_old) {
        let v_2 = string_suffix_replace(function_name_old, suffix_old, suffix_new);
        return v_2;
    };
    await function_rename_suffix_generic(function_name_old_parts, function_name_old_to_new);
    metadata([]);
}