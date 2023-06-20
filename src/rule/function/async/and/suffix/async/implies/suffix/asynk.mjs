import { list_take_without_last } from '../../../../../../../../list/take/without/last.mjs';
import { arguments_assert } from '../../../../../../../../arguments/assert.mjs';
import { function_rename_suffix_change } from '../../../../../../../../function/rename/suffix/change.mjs';
import { object_keys } from '../../../../../../../../object/keys.mjs';
import { function_search_part_last_async_not_is } from '../../../../../../../../function/search/part/last/async/not/is.mjs';
import { function_suffix_async } from '../../../../../../../../function/suffix/async.mjs';
import { string_identifier_parts_from } from '../../../../../../../../string/identifier/parts/from.mjs';
import { string_identifier_parts_to } from '../../../../../../../../string/identifier/parts/to.mjs';
export async function rule_function_async_and_suffix_async_implies_suffix_asynk() {
    arguments_assert(arguments, []);
    const suffix = function_suffix_async();
    let needs_renaming = await function_search_part_last_async_not_is(suffix);
    for (let function_name of object_keys(needs_renaming)) {
        let parts = string_identifier_parts_to(function_name);
        let without_last = list_take_without_last(parts);
        let function_name_no_suffix = string_identifier_parts_from(without_last);
        let replacement_suffix = 'asynk';
        await function_rename_suffix_change(function_name_no_suffix, suffix, replacement_suffix);
    }
}