import { object_properties } from '../object/properties.mjs';
import { visit_filter } from '../visit/filter.mjs';
import { js_node_is_identifier } from './node/is/identifier.mjs';
import { js_node_is } from './node/is.mjs';
import { array_add } from '../array/add.mjs';
import { array_is } from '../array/is.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { js_body_get } from './body/get.mjs';
import { js_identifier_counts } from './identifier/counts.mjs';
export function js_identifiers(parsed) {
    return js_identifier_counts(parsed);
}
