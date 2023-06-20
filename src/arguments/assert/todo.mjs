import { metadata_arguments_assert_none } from '../../metadata/arguments/assert/none.mjs';
import { metadata } from '../../metadata.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../assert.mjs';
export function arguments_assert_todo(value) {
    arguments_assert(arguments, [function v_2() {
            return true;
        }]);
    let v = tautology(value);
    return v;
    metadata([metadata_arguments_assert_none()]);
}