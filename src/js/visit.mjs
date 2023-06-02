import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { object_properties } from '../object/properties.mjs';
import { visit_filter } from '../visit/filter.mjs';
import { js_body_get } from './body/get.mjs';
import { js_node_is_type } from './node/is/type.mjs';
export function js_visit(parsed, filter, lambda) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    let root;
    if (js_node_is_type(parsed, 'Program')) {
        root = js_body_get(parsed);
    } else {
        root = parsed;
    }
    visit_filter(body, node => object_properties(node), filter, lambda);
    metadata([]);
}