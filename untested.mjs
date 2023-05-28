import { function_name_all } from "./src/function/name/all.mjs";
import { function_tests_count } from "./src/function/tests/count.mjs";
import { log } from "./src/log.mjs";

const function_names = await function_name_all();
for (let function_name of function_names) {
    if (await function_tests_count(function_name) === 0) {
        log(function_name);
    }
}