import { metadata } from '../../../metadata.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function metadata_arguments_assert_none() {
    arguments_assert(arguments, []);
    metadata([]);
}