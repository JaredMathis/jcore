import { object_merge } from '../../../../object/merge.mjs';
import { function_names_each_map } from '../map.mjs';
export function function_names_each_map_args(refactor_fn, args_additional) {
    let v = function_names_each_map(function v_2(args) {
        return refactor_fn(object_merge(args_additional, args));
    });
    return v;
}