import { not } from '../../not.mjs';
import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { visit_throws } from './async.mjs';
import { function_is } from '../../function/is.mjs';
import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function visit_throws_not(root, children_get) {
    arguments_assert(arguments, [
        defined_is,
        function_is
    ]);
    let result = not(visit_throws(root, children_get));
    return result;
    metadata([metadata_generated()]);
}