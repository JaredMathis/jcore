import { function_name_all } from "./src/function/name/all.mjs";
import { function_tests_count } from "./src/function/tests/count.mjs";
import { log } from "./src/log.mjs";

for (let function_name of await function_name_all()) {
    if (await function_tests_count(function_name) === 0) {
        log(function_name);
    }
}