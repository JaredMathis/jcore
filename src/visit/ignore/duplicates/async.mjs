import { boolean_value_true } from '../../../boolean/value/true.mjs';
import { function_is } from '../../../function/is.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { visit_recursive_ignore_duplicates_async } from '../../recursive/ignore/duplicates/async.mjs';
export async function visit_ignore_duplicates_async(node, children_get, lambda) {
    arguments_assert(arguments, [
        defined_is,
        function_is,
        function_is
    ]);
    let ignore_duplicates = boolean_value_true();
    let v = [];
    let v_2 = [];
    await visit_recursive_ignore_duplicates_async(node, children_get, lambda, v, v_2, ignore_duplicates);
    metadata([]);
}