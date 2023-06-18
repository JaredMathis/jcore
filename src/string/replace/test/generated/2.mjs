import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_replace } from '../../../replace.mjs';
export function string_replace_test_generated_2() {
    arguments_assert(arguments, []);
    let expected = 'aaa';
    let actual = string_replace('a', '', 'a');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}