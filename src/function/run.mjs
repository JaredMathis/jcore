import { array_first } from "./src/array/first.mjs";
import { array_skip } from "./src/array/skip.mjs";
import { string_replace } from "./src/string/replace.mjs";
import { array_skip_first } from "./src/array/skip/first.mjs";
import { directory_separator } from "./src/directory/separator.mjs";
import { function_name_to_path } from "./src/function/name/to/path.mjs";
import { log } from "./src/log.mjs"
import { directory_current } from "./src/directory/current.mjs";
import { js_directory_separator } from "./src/js/directory/separator.mjs";

export async function function_run(function_name, remaining) {
    let function_path = function_name_to_path(function_name);
    let concated = directory_current() + directory_separator() + function_path;
    let replaced = string_replace(concated, directory_separator(), js_directory_separator());
    let imported = await import(replaced);
    let imported_function = imported[function_name];
    let result = await imported_function(...remaining);
    return result;
}
