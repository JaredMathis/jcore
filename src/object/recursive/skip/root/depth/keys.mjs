import { log } from '../../../../../log.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { object_recursive_property_key } from '../../../property/key.mjs';
import { list_map_property } from '../../../../../list/map/property.mjs';
import { object_recursive_skip_root_depth } from '../depth.mjs';
import { list_map } from '../../../../../list/map.mjs';
import { list_filter } from '../../../../../list/filter.mjs';
import { object_property_exists } from '../../../../property/exists.mjs';
export function object_recursive_skip_root_depth_keys(tree_right, length_max) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let stacks = object_recursive_skip_root_depth(tree_right, length_max);
    list_map(stacks, function v(stack) {
        let with_key = list_filter(stack, function v_2(s) {
            return object_property_exists(s, object_recursive_property_key());
        });
        log({ with_key });
    });
    let tree_right_found_keys = list_map_property(stacks, object_recursive_property_key());
    return tree_right_found_keys;
}