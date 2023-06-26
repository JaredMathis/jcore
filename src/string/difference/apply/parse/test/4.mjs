import { integer_value_5 } from '../../../../../integer/value/5.mjs';
import { integer_value_123 } from '../../../../../integer/value/123.mjs';
import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_difference_apply_parse } from '../../parse.mjs';
export function string_difference_apply_parse_test_4() {
    arguments_assert(arguments, []);
    let expected = {
        'position': integer_value_123(),
        'operation': '-',
        'removed': integer_value_5()
    };
    let v_2 = '123-5';
    let actual = string_difference_apply_parse(v_2);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}