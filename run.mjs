import { array_first } from "./src/array/first.mjs";
import { array_skip } from "./src/array/skip.mjs";
import { array_skip_first } from "./src/array/skip/first.mjs";
import { function_name_to_path } from "./src/function/name/to/path.mjs";
import { log } from "./src/log.mjs"

let args_command_line = Array.from(process.argv);
let skipped = array_skip(args_command_line, 2);

let function_name = array_first(skipped);
let remaining = array_skip_first(skipped);

let function_path = function_name_to_path(function_name);
let imported = await import(function_path);
let imported_function = imported[function_name];
let result = imported_function(...remaining);

log(`Run result: ${result}`);