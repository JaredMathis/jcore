import { object_properties } from '../object/properties.mjs';
import { visit_filter } from '../visit/filter.mjs';
import { js_node_is_identifier } from './node/is/identifier.mjs';
import { js_node_is } from './node/is.mjs';
import { array_add } from '../array/add.mjs';
import { array_is } from '../array/is.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { js_body_get } from './body/get.mjs';
export function js_identifiers(parsed) {
    return js_identifier_counts(parsed);
}

function js_identifier_counts(parsed) {
    let result = [];
    let body = js_body_get(parsed);
    visit_filter(body, node => object_properties(node), node => js_node_is(node) && js_node_is_identifier(node), node => {
        let r = object_property_get(node, 'name');
        array_add(result, r);
    });
    return result;
}
