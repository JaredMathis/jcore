import { function_is } from '../function/is.mjs';
import { defined_is } from '../defined/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { visit_recursive_async } from './recursive/async.mjs';
import { metadata } from '../metadata.mjs';
export async function visit_async(root, children_get, lambda_local) {
    arguments_assert(arguments, [
        defined_is,
        function_is,
        function_is
    ]);
    let v = [];
    let v_2 = [];
    await visit_recursive_async(root, children_get, lambda_local, v, v_2);
    metadata([]);
}