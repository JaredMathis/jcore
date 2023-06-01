import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { function_run } from '../../function/run.mjs';
import { file_js_map_args } from './map/args.mjs';
export async function file_js_map(function_name_mapper, file_path) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    await file_js_map_args(file_path, mapper);
    async function mapper(args) {
        await function_run(function_name_mapper, [args]);
    }
    metadata([]);
}