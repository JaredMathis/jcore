import { metadata_generated } from './metadata/generated.mjs';
import { metadata } from './metadata.mjs';
import { function_is } from './function/is.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export function occurs(lambda) {
    arguments_assert(arguments, [function_is]);
    let result = false;
    let v_2 = function v() {
        result = true;
    };
    lambda(v_2);
    return result;
    metadata([metadata_generated()]);
}