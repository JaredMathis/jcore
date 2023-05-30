import { object_property_get } from '../object/property/get.mjs';
import { visit } from '../visit.mjs';
export function visit_filter(root, children_get, filter, lambda) {
    visit(root, children_get, lambda_local);
    function lambda_local(v) {
        let node = object_property_get(v, 'node');
        if (filter(node)) {
            lambda(v);
        }
    }
}