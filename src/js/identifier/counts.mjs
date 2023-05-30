import { object_property_get } from '../../object/property/get.mjs';
import { object_property_initialize_if_unset } from '../../object/property/initialize/if/unset.mjs';
import { object_property_set } from '../../object/property/set.mjs';
import { list_contains } from '../../list/contains.mjs';
import { add_1 } from '../../add/1.mjs';
import { comment } from '../../comment.mjs';
import { js_visit_nodes_identifier } from '../visit/nodes/identifier.mjs';
comment(`This does not count "hasOwnProperty" for now`);
export function js_identifier_counts(parsed) {
    let result = {};
    js_visit_nodes_identifier(parsed, node => {
        let invalid_names = ['hasOwnProperty'];
        let r = object_property_get(node, 'name');
        if (!list_contains(invalid_names, r)) {
            object_property_initialize_if_unset(result, r, 0);
            let previous = object_property_get(result, r);
            object_property_set(result, r, add_1(previous));
        }
    });
    return result;
}