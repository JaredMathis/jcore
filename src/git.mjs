import { function_run_arguments } from './function/run/arguments.mjs';
import { git_pacp } from './git/pacp.mjs';
export async function git() {
    await function_run_arguments(arguments);
    await git_pacp();
}