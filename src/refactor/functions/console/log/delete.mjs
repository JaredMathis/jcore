import { refactor_console_log_delete } from '../../../console/log/delete.mjs';
import { function_names_each_map_args } from '../../../../function/names/each/map/args.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function refactor_functions_console_log_delete() {
    arguments_assert(arguments, []);
    await function_names_each_map_args(refactor_console_log_delete, {});
}