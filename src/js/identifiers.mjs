import { object_properties } from '../object/properties.mjs';
import {visit} from '../visit.mjs'
import { visit_filter } from '../visit/filter.mjs';
import { js_node_is_identifier } from './node/is/identifier.mjs';
export function js_identifiers(parsed) {
    let {body} = parsed;
    visit_filter(
        body, 
        node => object_properties(node), 
        node => js_node_is_identifier(node),
        node => {
            console.log(node);
        });
}