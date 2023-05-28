import { array_skip } from "./src/array/skip.mjs";
import { log } from "./src/log.mjs"

let args = Array.from(process.argv);
let skipped = array_skip(args, 2);

log(skipped) 