import { metadata_arguments_assert_none_skip_rule } from './metadata/arguments/assert/none/skip/rule.mjs';
import { metadata } from './metadata.mjs';
export function tautology(value) {
    return true;
    metadata([metadata_arguments_assert_none_skip_rule()]);
}