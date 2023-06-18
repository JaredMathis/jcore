import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_get } from '../../get.mjs';
export function string_difference_get_test_13() {
    arguments_assert(arguments, []);
    let expected = [
        '0-1',
        '0+abcde',
        '2-1',
        '6+abcde'
    ];
    let actual = string_difference_get('zfz', 'abcdefabcde');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}