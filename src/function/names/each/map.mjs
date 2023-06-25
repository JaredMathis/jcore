import { function_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { file_js_all_map_args } from '../../../file/js/all/map/args.mjs';
export async function function_names_each_map(logic) {
    arguments_assert(arguments, [function_is]);
    await file_js_all_map_args(logic);
    metadata([]);
}