import { function_name_all } from "./src/function/name/all.mjs";
import { function_test_count } from "./src/function/test/count.mjs";

for (let function_name of await function_name_all()) {
    console.log(function_name)
    if (function_test_count(function_name) === 0) {
        log(function_name);
    }
}