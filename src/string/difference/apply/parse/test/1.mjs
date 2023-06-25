import { integer_value_2 } from '../../../../../integer/value/2.mjs';
import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_difference_apply_parse } from '../../parse.mjs';
export function string_difference_apply_parse_test_1() {
    arguments_assert(arguments, []);
    let expected = {
        'position': integer_value_2(),
        'operation': '+',
        'text': 'a'
    };
    let actual = string_difference_apply_parse('2+a');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}