import { visit_async } from '../async.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { function_is } from '../../function/is.mjs';
import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function visit_filter_async(root, children_get, filter, lambda) {
    arguments_assert(arguments, [
        defined_is,
        function_is,
        function_is,
        function_is
    ]);
    await visit_async(root, children_get, lambda_local);
    async function lambda_local(v) {
        let node = object_property_get(v, 'node');
        if (filter(node)) {
            let v_2 = await lambda(v);
            return v_2;
        }
    }
    metadata([]);
}