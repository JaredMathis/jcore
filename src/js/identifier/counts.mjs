import { object_properties } from '../../object/properties.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { object_property_initialize } from '../../object/property/initialize.mjs';
import { object_property_set } from '../../object/property/set.mjs';
import { visit_filter } from '../../visit/filter.mjs';
import { js_body_get } from '../body/get.mjs';
import { js_node_is } from '../node/is.mjs';
import { js_node_is_identifier } from '../node/is/identifier.mjs';
import { add_1 } from '../../add/1.mjs';
import { comment } from '../../comment.mjs';
comment(`This does not count "hasOwnProperty" for now`)
export function js_identifier_counts(parsed) {
    let result = {};
    let body = js_body_get(parsed);
    visit_filter(body, node => object_properties(node), node => js_node_is(node) && js_node_is_identifier(node), node => {
        let invalid_names = ['hasOwnProperty']
        let r = object_property_get(node, 'name');
        object_property_initialize(result, r, 0);
        let previous = object_property_get(result, r);
        object_property_set(result, r, add_1(previous));
    });
    return result;
}