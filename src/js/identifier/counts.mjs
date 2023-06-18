import { not } from '../../not.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { object_property_initialize_if_unset } from '../../object/property/initialize/if/unset.mjs';
import { object_property_set } from '../../object/property/set.mjs';
import { list_contains } from '../../list/contains.mjs';
import { add_1 } from '../../add/1.mjs';
import { comment } from '../../comment.mjs';
import { js_visit_nodes_identifier } from '../visit/nodes/identifier.mjs';
import { js_node_is } from '../node/is.mjs';
comment(`This does not count "hasOwnProperty" for now`);
export function js_identifier_counts(parsed) {
    arguments_assert(arguments, [js_node_is]);
    let result = {};
    js_visit_nodes_identifier(parsed, v => {
        let node = object_property_get(v, 'node');
        let invalid_names = ['hasOwnProperty'];
        let r = object_property_get(node, 'name');
        if (not(list_contains(invalid_names, r))) {
            object_property_initialize_if_unset(result, r, 0);
            let previous = object_property_get(result, r);
            let v_2 = add_1(previous);
            object_property_set(result, r, v_2);
        }
    });
    return result;
    metadata([]);
}