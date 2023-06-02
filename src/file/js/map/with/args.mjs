import { tautology } from '../../../../tautology.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_run } from '../../../../function/run.mjs';
import { file_js_map_args } from '../args.mjs';
export async function file_js_map_with_args(file_path, function_name_mapper, args) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    await file_js_map_args(file_path, mapper);
    async function mapper(args) {
        await function_run(function_name_mapper, [args]);
    }
}