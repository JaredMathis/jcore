import { metadata_generated } from '../metadata/generated.mjs';
import { metadata } from '../metadata.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { visit } from '../visit.mjs';
import { function_is } from '../function/is.mjs';
import { defined_is } from '../defined/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function visit_filter(root, children_get, filter, lambda) {
    arguments_assert(arguments, [
        defined_is,
        function_is,
        function_is,
        function_is
    ]);
    visit(root, children_get, lambda_local);
    function lambda_local(v) {
        let node = object_property_get(v, 'node');
        if (filter(node)) {
            let v_2 = lambda(v);
            return v_2;
        }
    }
    metadata([metadata_generated()]);
}