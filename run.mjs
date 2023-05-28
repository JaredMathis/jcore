import { array_first } from "./src/array/first.mjs";
import { array_skip } from "./src/array/skip.mjs";
import { string_replace } from "./src/string/replace.mjs";
import { array_skip_first } from "./src/array/skip/first.mjs";
import { directory_separator } from "./src/directory/separator.mjs";
import { function_name_to_path } from "./src/function/name/to/path.mjs";
import { log } from "./src/log.mjs"
import { directory_current } from "./src/directory/current.mjs";

async function run() {
    let args_command_line = Array.from(process.argv);
    let skipped = array_skip(args_command_line, 2);
    
    let function_name = array_first(skipped);
    let remaining = array_skip_first(skipped);
    
    let function_path = function_name_to_path(function_name);
    let concated = directory_current() + directory_separator() + function_path;
    let replaced = string_replace(concated, directory_separator(), '/');
    let imported = await import(replaced);
    let imported_function = imported[function_name];
    let result = await imported_function(...remaining);
    
    log(`Run result: ${result}`);
}

run();