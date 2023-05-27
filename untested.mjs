import { function_name_all } from "./src/function/name/all.mjs";

for (let function_name of await function_name_all()) {
    if (function_tests_count(function_name) === 0) {
        log(function_name);
    }
}