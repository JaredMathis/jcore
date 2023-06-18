import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_starts_with } from '../../../with.mjs';
export function string_starts_with_test_generated_1() {
    arguments_assert(arguments, []);
    let expected = true;
    let actual = string_starts_with('aa', 'aa');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}