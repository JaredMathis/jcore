import { js_mapper_with_function_declaration_get } from '../../../../../../js/mapper/with/function/declaration/get.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { file_js_all_map_args } from '../../args.mjs';
export async function file_js_all_map_args_if_function(logic) {
    await file_js_all_map_args(js_mapper_with_function_declaration_get(logic));
    metadata([]);
}