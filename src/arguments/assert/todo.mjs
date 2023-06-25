import { metadata_arguments_assert_none } from '../../metadata/arguments/assert/none.mjs';
import { metadata } from '../../metadata.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../assert.mjs';
export function arguments_assert_todo(value) {
    let v_3 = [function v_2() {
            return true;
        }];
    arguments_assert(arguments, v_3);
    let v = tautology(value);
    return v;
    let v_4 = [metadata_arguments_assert_none()];
    metadata(v_4);
}