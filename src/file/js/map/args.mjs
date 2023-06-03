import { path_is } from '../../../path/is.mjs';
import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { file_js_overwrite } from '../overwrite.mjs';
import { file_js_path_to_mapper_args } from '../path/to/mapper/args.mjs';
import { js_mapper_with_function_declaration_get } from '../../../js/mapper/with/function/declaration/get.mjs';
export async function file_js_map_args(file_path, mapper) {
    arguments_assert(arguments, [
        path_is,
        tautology
    ]);
    let args = await file_js_path_to_mapper_args(file_path);
    const get_result = js_mapper_with_function_declaration_get(mapper);
    let result = await get_result(args);
    if (result) {
        return;
    }
    await file_js_overwrite(args);
    metadata([]);
}