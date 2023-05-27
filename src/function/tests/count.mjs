import { directory_exists } from "../../directory/exists.mjs";
import { directory_read } from "../../directory/read.mjs";
import { path_join } from "../../path/join.mjs";
import { function_name_to_path } from "../name/to/path.mjs";
import { function_tests_all } from "./all.mjs";

export async function function_tests_count(function_name) {
    let function_path = function_name_to_path(function_name);
    let tests = await function_tests_all(function_name);

    console.log({tests})
}