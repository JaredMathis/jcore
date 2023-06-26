import { arguments_assert } from './arguments/assert.mjs';
import { metadata } from './metadata.mjs';
import { log } from './log.mjs';
import { function_run_arguments } from './function/run/arguments.mjs';
import { command_line_args_skipped } from './command/line/args/skipped.mjs';
import { json_to } from './json/to.mjs';
export async function run() {
    arguments_assert(arguments, []);
    let skipped = command_line_args_skipped();
    let result = await function_run_arguments(skipped);
    let v = `Run result: ${ result ? json_to(result) : result }`;
    log(v);
    metadata([]);
}