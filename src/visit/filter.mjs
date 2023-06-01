import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { visit } from '../visit.mjs';
export function visit_filter(root, children_get, filter, lambda) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology,
        tautology
    ]);
    visit(root, children_get, lambda_local);
    function lambda_local(v) {
        let node = object_property_get(v, 'node');
        if (filter(node)) {
            lambda(v);
        }
    }
    metadata([]);
}