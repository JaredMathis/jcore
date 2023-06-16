import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { noop } from '../../noop.mjs';
import { visit } from '../../visit.mjs';
import { function_is } from '../../function/is.mjs';
import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function visit_lambda_none(root, children_get) {
    arguments_assert(arguments, [
        defined_is,
        function_is
    ]);
    let result = visit(root, children_get, noop);
    return result;
    metadata([metadata_generated()]);
}