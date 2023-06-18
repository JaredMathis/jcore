import { object_merge } from '../../../../../../../object/merge.mjs';
import { file_js_all_map_args_if_function } from '../function.mjs';
export function file_js_all_map_args_if_function_args(refactor_fn, args_additional) {
    return file_js_all_map_args_if_function(args => refactor_fn(object_merge(args_additional, args)));
}