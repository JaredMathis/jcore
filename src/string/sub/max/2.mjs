import { list_map_property } from '../../../list/map/property.mjs';
import { object_recursive_skip_root_depth } from '../../../object/recursive/skip/root/depth.mjs';
import { object_recursive_property_value } from '../../../object/recursive/property/value.mjs';
import { object_property_remove } from '../../../object/property/remove.mjs';
import { object_recursive_property_key } from '../../../object/recursive/property/key.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { list_without_multiple } from '../../../list/without/multiple.mjs';
import { object_keys_recursive } from '../../../object/keys/recursive.mjs';
import { string_to_tree } from '../../to/tree.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_recursive_skip_root } from '../../../object/recursive/skip/root.mjs';
import { list_contains } from '../../../list/contains.mjs';
export function string_sub_max_2(left, right) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let tree_left = string_to_tree(left);
    let tree_left_keys = object_keys_recursive(tree_left);
    let tree_right = string_to_tree(right);
    let tree_right_keys = object_keys_recursive(tree_right);
    let r = list_without_multiple(tree_right_keys, tree_left_keys);
    object_recursive_skip_root(tree_right, function v_2(v) {
        let {node, parent} = v;
        let key = object_property_get(node, object_recursive_property_key());
        if (list_contains(r, key)) {
            let parent_value = object_property_get(parent, object_recursive_property_value());
            object_property_remove(parent_value, key);
        }
    });
    let tree_left_subs = object_keys_recursive(tree_left);
    let tree_right_subs = object_keys_recursive(tree_right);
    let length_max = 1;
    let tree_right_found = object_recursive_skip_root_depth(tree_right, length_max);
    let tree_right_found_keys = list_map_property(tree_right_found, object_recursive_property_key());
    return {
        tree_right,
        tree_left,
        tree_right_found_keys

    };
}