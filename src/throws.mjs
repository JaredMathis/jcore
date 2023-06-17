import { metadata_generated } from './metadata/generated.mjs';
import { metadata } from './metadata.mjs';
import { function_is } from './function/is.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export function throws(lambda) {
    arguments_assert(arguments, [function_is]);
    let result
    let errored = false;
    try {
        result = lambda();
    } catch (e) {
        errored = true;
    }
    return errored;
    metadata([metadata_generated()]);
}