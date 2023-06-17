import { throws_generic } from './throws/generic.mjs';
import { result_property_success_get } from './result/property/success/get.mjs';
import { metadata_generated } from './metadata/generated.mjs';
import { metadata } from './metadata.mjs';
import { function_is } from './function/is.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { not } from './not.mjs';
export function throws(lambda) {
    arguments_assert(arguments, [function_is]);
    let result = throws_generic(lambda);
    let errored = not(result_property_success_get(result));
    return errored;
    metadata([metadata_generated()]);
}