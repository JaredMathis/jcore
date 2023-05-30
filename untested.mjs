import { list_filter_async } from "./src/list/filter/async.mjs";
import { list_take } from "./src/list/take.mjs";
import { function_name_all } from "./src/function/name/all.mjs";
import { function_tests_count } from "./src/function/tests/count.mjs";
import { log } from "./src/log.mjs";

let maximum_untested_display = 10;
const function_names = await function_name_all();
let filtered = await list_filter_async(
    function_names, 
    async f =>  await function_tests_count(f) === 0);
let limited = list_take(filtered, maximum_untested_display);
for (let function_name of limited) {
    log(function_name);
}