import { tautology } from '../../../../../../tautology.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { js_mapper_with_function_declaration_get } from '../../../../../../js/mapper/with/function/declaration/get.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { file_js_all_map_args } from '../../args.mjs';
export async function file_js_all_map_args_if_function(logic) {
    arguments_assert(arguments, [tautology]);
    await file_js_all_map_args(js_mapper_with_function_declaration_get(logic));
    metadata([]);
}