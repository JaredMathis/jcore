import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { defined_is } from '../../defined/is.mjs';
export function list_single_item(item) {
    arguments_assert(arguments, [defined_is]);
    return [item];
    metadata([]);
}