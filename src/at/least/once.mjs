import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { function_is } from '../../function/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function at_least_once(lambda) {
    arguments_assert(arguments, [function_is]);
    let result = false;
    lambda(function v() {
        result = true;
    });
    return result;
    metadata([metadata_generated()]);
}