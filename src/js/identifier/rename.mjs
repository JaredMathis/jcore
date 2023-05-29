import { object_property_get } from '../../object/property/get.mjs';
export function js_identifier_rename(args, identifier_name_old, identifier_name_new) {
    let parsed = object_property_get(args, 'parsed');
    js_visit_nodes_identifier(parsed, node => {
        let n = object_property_get(node, 'name');
        if (n === identifier_name_old) {
            console.log({n})
        }
    });
}