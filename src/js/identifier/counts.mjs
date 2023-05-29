import { object_property_get } from '../../object/property/get.mjs';
import { object_property_initialize } from '../../object/property/initialize.mjs';
import { object_property_set } from '../../object/property/set.mjs';
import { array_contains } from '../../array/contains.mjs';
import { add_1 } from '../../add/1.mjs';
import { comment } from '../../comment.mjs';
import { js_visit_nodes_identifier } from '../visit/nodes/identifier.mjs';
comment(`This does not count "hasOwnProperty" for now`);
export function js_identifier_counts(parsed) {
    let result = {};
    js_visit_nodes_identifier(parsed, node => {
        let invalid_names = ['hasOwnProperty'];
        let r = object_property_get(node, 'name');
        if (!array_contains(invalid_names, r)) {
            object_property_initialize(result, r, 0);
            let previous = object_property_get(result, r);
            object_property_set(result, r, add_1(previous));
        }
    });
    return result;
}