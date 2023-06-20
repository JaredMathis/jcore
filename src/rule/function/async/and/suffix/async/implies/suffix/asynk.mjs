import { function_rename_suffix_change } from '../../../../../../../../function/rename/suffix/change.mjs';
import { object_keys } from '../../../../../../../../object/keys.mjs';
import { function_search_part_last_async_not_is } from '../../../../../../../../function/search/part/last/async/not/is.mjs';
import { function_suffix_async } from '../../../../../../../../function/suffix/async.mjs';
export async function rule_function_async_and_suffix_async_implies_suffix_asynk() {
    const suffix = function_suffix_async();
    let needs_renaming = await function_search_part_last_async_not_is(suffix);
    for (let function_name of object_keys(needs_renaming)) {
        let replacement_suffix = 'asynk';
        await function_rename_suffix_change(function_name, suffix, replacement_suffix);
    }
}