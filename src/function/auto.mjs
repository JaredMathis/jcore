import { file_js_path_to_args } from "../file/js/path/to/args.mjs";
import { refactor_import_fix } from "../refactor/import/fix.mjs";
import { function_name_to_path } from "./name/to/path.mjs";

export async function function_auto(function_name) {
    let function_path = function_name_to_path(function_name);
    let args = await file_js_path_to_args(function_path);
    console.log({args});
    await refactor_import_fix(args);
}