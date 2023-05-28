import { array_first } from "./src/array/first.mjs";
import { array_skip } from "./src/array/skip.mjs";
import { array_skip_first } from "./src/array/skip/first.mjs";
import { log } from "./src/log.mjs"

let args = Array.from(process.argv);
let skipped = array_skip(args, 2);

let function_name = array_first(skipped);
let remaining = array_skip_first(skipped);

log(skipped) 