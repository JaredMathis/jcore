import { function_is } from '../../../../../../function/is.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { file_js_all_map_args } from '../../args.mjs';
export async function file_js_all_map_args_if_function(logic) {
    arguments_assert(arguments, [function_is]);
    await file_js_all_map_args(logic);
    metadata([]);
}