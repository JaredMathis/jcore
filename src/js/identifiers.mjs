import { object_properties } from '../object/properties.mjs';
import { visit_filter } from '../visit/filter.mjs';
import { js_node_is_identifier } from './node/is/identifier.mjs';
import { array_add } from '../array/add.mjs';
import { object_property_get } from '../object/property/get.mjs';
export function js_identifiers(parsed) {
    let result = [];
    let {body} = parsed;
    visit_filter(
        body, 
        node => object_properties(node), 
        node => js_node_is_identifier(node),
        node => {
            let r = object_property_get(node, 'name');
            array_add(result, r);
        });
    return result;
}