import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_mapper_with_function_declaration_generic } from '../../../js/mapper/with/function/declaration/generic.mjs';
import { metadata } from '../../../metadata.mjs';
import { file_js_overwrite } from '../overwrite.mjs';
import { file_js_path_to_mapper_args } from '../path/to/mapper/args.mjs';
export async function file_js_map_args(file_path, mapper) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let args = await file_js_path_to_mapper_args(file_path);
    await js_mapper_with_function_declaration_generic(args, mapper, false);
    await file_js_overwrite(args);
    metadata([]);
}