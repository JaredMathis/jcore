import { directory_read } from "../../directory/read.mjs";

export async function function_test_count(function_name) {
    let function_path = function_name_to_path(function_name);
    let test_path = path_join([function_path, 'test']);
    await directory_read(test_path);
}