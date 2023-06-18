import { refactor_unlambdaify } from '../refactor/unlambdaify.mjs';
import { file_js_all_map_args_if_function } from '../file/js/all/map/args/if/function.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function functions_unlambdaify() {
    arguments_assert(arguments, []);
    await file_js_all_map_args_if_function(refactor_unlambdaify);
}