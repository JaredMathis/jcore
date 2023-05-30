import { log } from './src/log.mjs';
import { function_run_arguments } from './src/function/run/arguments.mjs';
import { command_line_args_skipped } from './src/command/line/args/skipped.mjs';
async function run() {
    let skipped = command_line_args_skipped();
    let result = await function_run_arguments(skipped);
    log(`Run result: ${ result }`);
}
run();

