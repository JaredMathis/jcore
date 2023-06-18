import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_new_line } from '../../../line.mjs';
export function string_new_line_test_generated_1() {
    arguments_assert(arguments, []);
    let expected = '\n';
    let actual = string_new_line();
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}