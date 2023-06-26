import { boolean_value_true } from '../../boolean/value/true.mjs';
import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { visit_recursive_ignore_duplicates } from '../recursive/ignore/duplicates.mjs';
import { function_is } from '../../function/is.mjs';
import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function visit_ignore_duplicates(node, children_get, lambda) {
    arguments_assert(arguments, [
        defined_is,
        function_is,
        function_is
    ]);
    let ignore_duplicates = boolean_value_true();
    visit_recursive_ignore_duplicates(node, children_get, lambda, [], [], ignore_duplicates);
    metadata([metadata_generated()]);
}