import { object_property_set } from '../../../object/property/set.mjs';
import { js_visit_nodes_identifier } from '../../visit/nodes/identifier.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export function js_identifier_rename_if(args, should_rename, name_new_get) {
    let changed = false;
    let parsed = object_property_get(args, 'parsed');
    js_visit_nodes_identifier(parsed, v => {
        let node = object_property_get(v, 'node');
        let name = object_property_get(node, 'name');
        if (should_rename(name)) {
            object_property_set(node, 'name', name_new_get(name));
            changed = true;
        }
    });
    return changed;
}