import { array_filter_async } from "./src/array/filter/async.mjs";
import { array_take } from "./src/array/take.mjs";
import { function_name_all } from "./src/function/name/all.mjs";
import { function_tests_count } from "./src/function/tests/count.mjs";
import { log } from "./src/log.mjs";

const function_names = await function_name_all();
let filtered = await array_filter_async(
    function_names, 
    async f =>  await function_tests_count(f) === 0);
let limited = array_take(filtered, 10);
for (let function_name of limited) {
    log(function_name);
}