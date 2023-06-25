import { integer_value_0 } from '../../../../integer/value/0.mjs';
import { integer_value_1 } from '../../../../integer/value/1.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { range_from } from '../../../from.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function range_from_test_generated_6() {
    arguments_assert(arguments, []);
    let expected = [
        -integer_value_1(),
        integer_value_0(),
        integer_value_1()
    ];
    let actual = range_from(-integer_value_1(), integer_value_1());
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}