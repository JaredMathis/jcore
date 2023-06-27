import { metadata_generated } from './metadata/generated.mjs';
import { metadata } from './metadata.mjs';
import { visit_recursive } from './visit/recursive.mjs';
import { function_is } from './function/is.mjs';
import { defined_is } from './defined/is.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export function visit(root, children_get, lambda_local) {
    arguments_assert(arguments, [
        defined_is,
        function_is,
        function_is
    ]);
    let v = [];
    let v_2 = [];
    visit_recursive(root, children_get, lambda_local, v, v_2);
    metadata([metadata_generated()]);
}