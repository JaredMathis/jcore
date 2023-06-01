import { metadata_arguments_assert_none } from './metadata/arguments/assert/none.mjs';
import { metadata } from './metadata.mjs';
export function tautology(value) {
    return true;
    metadata([metadata_arguments_assert_none()]);
}