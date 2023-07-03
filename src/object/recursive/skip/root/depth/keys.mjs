import { object_recursive_property_key } from '../../../property/key.mjs';
import { list_map_property } from '../../../../../list/map/property.mjs';
import { object_recursive_skip_root_depth } from '../depth.mjs';
export function object_recursive_skip_root_depth_keys(tree_right, length_max) {
    let tree_right_found = object_recursive_skip_root_depth(tree_right, length_max);
    let tree_right_found_keys = list_map_property(tree_right_found, object_recursive_property_key());
    return tree_right_found_keys;
}