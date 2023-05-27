import { directory_exists } from "../../directory/exists.mjs";
import { directory_read } from "../../directory/read.mjs";
import { path_join } from "../../path/join.mjs";
import { function_name_to_path } from "../name/to/path.mjs";

export async function function_tests_count(function_name) {
    let function_path = function_name_to_path(function_name);
    let test_path = path_join([function_path, 'test']);
    if (!await directory_exists(test_path)) {
        return 0;
    }
    await directory_read(test_path);
}