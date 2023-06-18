import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_difference_apply_parse } from '../../parse.mjs';
export function string_difference_apply_parse_test_3() {
    arguments_assert(arguments, []);
    let expected = {
        'position': 10,
        'operation': '+',
        'text': 'def'
    };
    let actual = string_difference_apply_parse('10+def');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}