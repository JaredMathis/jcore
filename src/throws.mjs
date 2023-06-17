import { result_unsuccess_is } from './result/unsuccess/is.mjs';
import { throws_generic } from './throws/generic.mjs';
import { metadata_generated } from './metadata/generated.mjs';
import { metadata } from './metadata.mjs';
import { function_is } from './function/is.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export function throws(lambda) {
    arguments_assert(arguments, [function_is]);
    let result = throws_generic(lambda);
    let errored = result_unsuccess_is(result);
    return errored;
    metadata([metadata_generated()]);
}