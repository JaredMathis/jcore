import { not } from '../../not.mjs';
import { function_unasyncify_generic } from '../../function/unasyncify/generic.mjs';
import { function_naming_suffix_async } from '../../function/naming/suffix/async.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_name_all } from '../../function/name/all.mjs';
import { string_ends_with } from '../../string/ends/with.mjs';
export async function refactor_functions_unasyncify() {
    arguments_assert(arguments, []);
    let ending = function_naming_suffix_async();
    let all = await function_name_all();
    for (let function_name of all) {
        if (not(string_ends_with(function_name, ending))) {
            continue;
        }
        await function_unasyncify_generic(function_name, ending);
    }
}