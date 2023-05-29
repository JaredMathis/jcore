import { function_run_arguments } from "./function/run/arguments.mjs";
import { git_acp } from "./git/acp.mjs";

export async function git() {
    await function_run_arguments(arguments);
    await git_acp();
}