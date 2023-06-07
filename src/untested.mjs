import { function_name_all_tests_not } from './function/name/all/tests/not.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { metadata } from './metadata.mjs';
import { list_filter_async } from './list/filter/async.mjs';
import { list_take } from './list/take.mjs';
import { function_tests_count } from './function/tests/count.mjs';
import { log } from './log.mjs';
export async function untested() {
    arguments_assert(arguments, []);
    let maximum_untested_display = 10;
    let function_names = await function_name_all_tests_not();
    let filtered = await list_filter_async(function_names, async f => await function_tests_count(f) === 0);
    let limited = list_take(filtered, maximum_untested_display);
    for (let function_name of limited) {
        log(function_name);
    }
    metadata([]);
}