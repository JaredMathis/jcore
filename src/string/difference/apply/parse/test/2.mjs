import { integer_value_2 } from '../../../../../integer/value/2.mjs';
import { integer_value_3 } from '../../../../../integer/value/3.mjs';
import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_difference_apply_parse } from '../../parse.mjs';
export function string_difference_apply_parse_test_2() {
    arguments_assert(arguments, []);
    let v_3 = integer_value_3();
    let v_4 = '-';
    let v_5 = integer_value_2();
    let expected = {
        'position': v_3,
        'operation': v_4,
        'removed': v_5
    };
    let v_2 = '3-2';
    let actual = string_difference_apply_parse(v_2);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}