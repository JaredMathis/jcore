import { arguments_assert_none } from './arguments/assert/none.mjs';
import { metadata } from './metadata.mjs';
export function tautology(value) {
    return true;
    metadata([arguments_assert_none()]);
}