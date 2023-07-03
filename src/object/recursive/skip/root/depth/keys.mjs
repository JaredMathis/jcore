import { log } from '../../../../../log.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { object_recursive_property_key } from '../../../property/key.mjs';
import { list_map_property } from '../../../../../list/map/property.mjs';
import { object_recursive_skip_root_depth } from '../depth.mjs';
export function object_recursive_skip_root_depth_keys(tree_right, length_max) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let tree_right_found = object_recursive_skip_root_depth(tree_right, length_max);
    log({ tree_right_found });
    let tree_right_found_keys = list_map_property(tree_right_found, object_recursive_property_key());
    return tree_right_found_keys;
}