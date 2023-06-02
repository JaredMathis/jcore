import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { file_js_overwrite } from '../overwrite.mjs';
import { file_js_path_to_mapper_args } from '../path/to/mapper/args.mjs';
import { js_mapper_with_function_declaration_get } from '../../../js/mapper/with/function/declaration/get.mjs';
export async function file_js_map_args(file_path, mapper) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let args = await file_js_path_to_mapper_args(file_path);
    let result = await js_mapper_with_function_declaration_get(mapper)(args);
    if (result) {
        return;
    }
    await file_js_overwrite(args);
    metadata([]);
}