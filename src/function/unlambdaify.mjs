import { js_identifier_is } from '../js/identifier/is.mjs';
import { refactor_unlambdaify } from '../refactor/unlambdaify.mjs';
import { function_name_get } from './name/get.mjs';
import { function_map } from './map.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function function_unlambdaify(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let v = function_name_get(refactor_unlambdaify);
    await function_map(v, function_name);
}