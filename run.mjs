import { array_skip } from './src/array/skip.mjs';
import { log } from './src/log.mjs';
import { array_to } from './src/array/to.mjs';
import { function_run_arguments } from './src/function/run/arguments.mjs';
async function run() {
    let args_command_line = array_to(process.argv);
    let skipped = array_skip(args_command_line, 2);
    let result = await function_run_arguments(skipped);
    log(`Run result: ${ result }`);
}
run();