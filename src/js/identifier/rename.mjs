import { object_property_get } from '../../object/property/get.mjs';
export function js_identifier_rename(args, identifier_name_old, identifier_name_new) {
    let parsed = object_property_get(args, 'parsed');
    js_visit_nodes_identifier(parsed, node => {
        let invalid_names = ['hasOwnProperty'];
        let r = object_property_get(node, 'name');
        if (!array_contains(invalid_names, r)) {
            object_property_initialize(result, r, 0);
            let previous = object_property_get(result, r);
            object_property_set(result, r, add_1(previous));
        }
    });
}