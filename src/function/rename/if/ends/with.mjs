import { string_suffix_replace } from '../../../../string/suffix/replace.mjs';
import { string_ends_with } from '../../../../string/ends/with.mjs';
import { metadata } from '../../../../metadata.mjs';
import { function_rename_if_generic } from '../generic.mjs';
import { js_identifier_sub_is } from '../../../../js/identifier/sub/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_rename_if_ends_with(prefix_old, prefix_new) {
    arguments_assert(arguments, [
        js_identifier_sub_is,
        js_identifier_sub_is
    ]);
    let predicate = string_ends_with;
    let function_name_map = string_suffix_replace;
    await function_rename_if_generic(prefix_old, prefix_new, predicate, function_name_map);
    metadata([]);
}