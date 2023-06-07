import { metadata_generated } from './metadata/generated.mjs';
import { metadata } from './metadata.mjs';
import { function_name_get } from './function/name/get.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export function sandbox() {
    arguments_assert(arguments, []);
    function_name_get(a);
}