import { refactor_import_fix } from '../../import/fix.mjs';
import { function_names_each_map_args } from '../../../function/names/each/map/args.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function refactor_functions_import_fix() {
    arguments_assert(arguments, []);
    await function_names_each_map_args(refactor_import_fix, {});
}