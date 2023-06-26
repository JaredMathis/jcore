import { metadata } from '../../metadata.mjs';
import { function_unasyncify } from '../../function/unasyncify.mjs';
import { not } from '../../not.mjs';
import { function_naming_suffix_asynk } from '../../function/naming/suffix/asynk.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_name_all } from '../../function/name/all.mjs';
import { string_ends_with } from '../../string/ends/with.mjs';
export async function refactor_functions_unasyncify() {
    arguments_assert(arguments, []);
    let ending = function_naming_suffix_asynk();
    let all = await function_name_all();
    for (let function_name of all) {
        let v_2 = string_ends_with(function_name, ending);
        let v = not(v_2);
        if (v) {
            continue;
        }
        await function_unasyncify(function_name);
    }
    metadata([]);
}