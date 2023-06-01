import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { object_properties } from '../object/properties.mjs';
import { visit_filter } from '../visit/filter.mjs';
import { js_body_get } from './body/get.mjs';
export function js_visit(parsed, filter, lambda) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    let body = js_body_get(parsed);
    visit_filter(body, node => object_properties(node), filter, lambda);
    metadata([]);
}