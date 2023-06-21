import { function_rename_if_generic } from '../generic.mjs';
import { js_identifier_sub_is } from '../../../../js/identifier/sub/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_prefix_replace } from '../../../../string/prefix/replace.mjs';
import { string_starts_with } from '../../../../string/starts/with.mjs';
export async function function_rename_if_starts_with(prefix_old, prefix_new) {
    arguments_assert(arguments, [
        js_identifier_sub_is,
        js_identifier_sub_is
    ]);
    let predicate = string_starts_with;
    let function_name_map = string_prefix_replace;
    await function_rename_if_generic(prefix_old, prefix_new, predicate, function_name_map);
    metadata([]);
}