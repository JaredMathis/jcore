import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_split } from '../../../split.mjs';
export function string_split_test_generated_6() {
    arguments_assert(arguments, []);
    let expected = [
        'a',
        'a',
        'b'
    ];
    let actual = string_split('aab', '');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}