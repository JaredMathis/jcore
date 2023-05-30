import { string_function_tests_name_is } from './string/function/tests/name/is.mjs';
import { list_filter } from './list/filter.mjs';
import { list_filter_async } from './list/filter/async.mjs';
import { list_take } from './list/take.mjs';
import { function_name_all } from './function/name/all.mjs';
import { function_tests_count } from './function/tests/count.mjs';
import { log } from './log.mjs';
export async function untested() {
    let maximum_untested_display = 10;
    const all = await function_name_all();
    let function_names = list_filter(all, a => !string_function_tests_name_is(a));
    let filtered = await list_filter_async(function_names, async f => await function_tests_count(f) === 0);
    let limited = list_take(filtered, maximum_untested_display);
    for (let function_name of limited) {
        log(function_name);
    }
}