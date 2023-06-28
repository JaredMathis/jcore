import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { function_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { object_merge } from '../../../../object/merge.mjs';
import { function_names_each_map } from '../map.mjs';
export function function_names_each_map_args(refactor_fn, args_additional) {
    arguments_assert(arguments, [
        function_is,
        arguments_assert_todo
    ]);
    let v_3 = function v_2(args) {
        let v_4 = object_merge(args_additional, args);
        let v_5 = refactor_fn(v_4);
        return v_5;
    };
    let v = function_names_each_map(v_3);
    return v;
    metadata([]);
}