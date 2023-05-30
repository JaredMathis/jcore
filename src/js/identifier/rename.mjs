import { object_property_get } from '../../object/property/get.mjs';
import { object_property_set } from '../../object/property/set.mjs';
import { js_visit_nodes_identifier } from '../visit/nodes/identifier.mjs';
export function js_identifier_rename(args, identifier_name_old, identifier_name_new) {
    let changed = false;
    let parsed = object_property_get(args, 'parsed');
    js_visit_nodes_identifier(parsed, v => {
        let node = object_property_get(v, 'node');
        let n = object_property_get(node, 'name');
        if (n === identifier_name_old) {
            object_property_set(node, 'name', identifier_name_new);
            changed = true;
        }
    });
    return changed;
}