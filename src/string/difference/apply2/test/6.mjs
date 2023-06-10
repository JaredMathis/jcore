import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_apply2 } from '../../apply2.mjs';
export function string_difference_apply2_test_6() {
    arguments_assert(arguments, []);
    let expected = 'abcdefabcde';
    let actual = string_difference_apply2('abbbabbabb', [
        '2-2',
        '2+cdef',
        '6-4',
        '8+cde'
    ]);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}