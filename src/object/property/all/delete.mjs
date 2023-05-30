import { object_property_remove } from '../remove.mjs';
import { object_keys } from '../../keys.mjs';
export function object_property_all_delete(node) {
    for (let key of object_keys(node)) {
        object_property_remove(node, key);
    }
}