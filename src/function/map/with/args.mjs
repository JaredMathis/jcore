import { arguments_assert } from '../../../arguments/assert.mjs';
import { file_js_map_with_args } from '../../../file/js/map/with/args.mjs';
import { tautology } from '../../../tautology.mjs';
import { function_name_to_file_path } from '../../name/to/file/path.mjs';
export async function function_map_with_args(function_name_mapper, function_name, args) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    let file_path = function_name_to_file_path(function_name);
    await file_js_map_with_args(file_path, function_name_mapper, args);
}