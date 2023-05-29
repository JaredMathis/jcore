import { array_first } from "./src/array/first.mjs";
import { array_skip } from "./src/array/skip.mjs";
import { string_replace } from "./src/string/replace.mjs";
import { array_skip_first } from "./src/array/skip/first.mjs";
import { directory_separator } from "./src/directory/separator.mjs";
import { function_name_to_path } from "./src/function/name/to/path.mjs";
import { log } from "./src/log.mjs"
import { directory_current } from "./src/directory/current.mjs";
import { js_directory_separator } from "./src/js/directory/separator.mjs";
import { function_run } from "./src/function/run.mjs";

async function run() {
    let args_command_line = Array.from(process.argv);
    let skipped = array_skip(args_command_line, 2);
    
    let result = await function_run_arguments(skipped);

    if (false)array_contains;
    
    log(`Run result: ${result}`);
}

run();
async function function_run_arguments(skipped) {
    let function_name = array_first(skipped);
    let remaining = array_skip_first(skipped);

    let result = await function_run(function_name, remaining);
    return result;
}

