import { object_is } from '../../../object/is.mjs';
import { metadata } from '../../../metadata.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { defined_is } from '../../../defined/is.mjs';
export function js_mapper_args_is(value) {
    arguments_assert(arguments, [defined_is]);
    return object_is(value);
    metadata([]);
}