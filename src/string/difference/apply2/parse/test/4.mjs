import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_difference_apply2_parse } from '../../parse.mjs';
export function string_difference_apply2_parse_test_4() {
    arguments_assert(arguments, []);
    let expected = {
        'position': 3,
        'operation': '-',
        'text': 'bc'
    };
    let actual = string_difference_apply2_parse('3-bc');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}