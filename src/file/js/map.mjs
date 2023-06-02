import { file_js_map_with_args } from './map/with/args.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export async function file_js_map(function_name_mapper, file_path) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    await file_js_map_with_args(file_path, function_name_mapper, {});
    metadata([]);
}