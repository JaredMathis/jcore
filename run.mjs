import { list_skip } from './src/list/skip.mjs';
import { log } from './src/log.mjs';
import { list_to } from './src/list/to.mjs';
import { function_run_arguments } from './src/function/run/arguments.mjs';
async function run() {
    let skipped = command_line_args_skipped();
    let result = await function_run_arguments(skipped);
    log(`Run result: ${ result }`);
}
run();

function command_line_args_skipped() {
    let args_command_line = list_to(process.argv);
    let skipped = list_skip(args_command_line, 2);
    return skipped;
}
