import { string_sub_max_to_result } from './to/result.mjs';
import { list_first } from '../../../list/first.mjs';
import { number_min } from '../../../number/min.mjs';
import { list_intersection } from '../../../list/intersection.mjs';
import { object_recursive_skip_root_depth_keys } from '../../../object/recursive/skip/root/depth/keys.mjs';
import { object_recursive_property_value } from '../../../object/recursive/property/value.mjs';
import { object_property_remove } from '../../../object/property/remove.mjs';
import { object_recursive_property_key } from '../../../object/recursive/property/key.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { list_without_multiple } from '../../../list/without/multiple.mjs';
import { object_keys_recursive } from '../../../object/keys/recursive.mjs';
import { string_to_tree } from '../../to/tree.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_recursive_skip_root } from '../../../object/recursive/skip/root.mjs';
import { list_contains } from '../../../list/contains.mjs';
import { list_empty } from '../../../list/empty.mjs';
import { string_length } from '../../length.mjs';
import { string_is } from '../../is.mjs';
export function string_sub_max_2(left, right) {
    arguments_assert(arguments, [
        string_is,
        string_is
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
    let intersection;
    let intersection_previous = [];
    const max = number_min(string_length(left), string_length(right));
    let length_max;
    for (length_max = 1; length_max <= max; length_max++) {
        let tree_right_found_keys = object_recursive_skip_root_depth_keys(tree_right, length_max);
        let tree_left_found_keys = object_recursive_skip_root_depth_keys(tree_left, length_max);
        intersection = list_intersection(tree_right_found_keys, tree_left_found_keys);
        if (list_empty(intersection)) {
            break;
        }
        intersection_previous = intersection;
    }
    let first;
    if (list_empty(intersection_previous)) {
        first = '';
    } else {
        first = list_first(intersection_previous);
    }
    return string_sub_max_to_result(first, left, right);
}