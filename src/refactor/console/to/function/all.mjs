import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { file_js_all_map_args } from '../../../../file/js/all/map/args.mjs';
import { refactor_console_to_function } from '../function.mjs';
export async function refactor_console_to_function_all() {
    arguments_assert(arguments, []);
    let v = function mapper(args) {
        refactor_console_to_function(args);
    };
    await file_js_all_map_args(v);
    metadata([]);
}