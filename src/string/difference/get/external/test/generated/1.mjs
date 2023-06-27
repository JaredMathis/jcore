import { integer_value_1 } from '../../../../../../integer/value/1.mjs';
import { metadata_generated } from '../../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../json/equal.mjs';
import { assert } from '../../../../../../assert.mjs';
import { string_difference_get_external } from '../../../external.mjs';
export function string_difference_get_external_test_generated_1() {
    arguments_assert(arguments, []);
    let v_4 = integer_value_1();
    let v_5 = integer_value_1();
    let v_6 = integer_value_1();
    let v_7 = integer_value_1();
    let v_8 = [
        '-aa',
        '\\ No newline at end of file',
        '+aab',
        '\\ No newline at end of file'
    ];
    let v_9 = [
        '\n',
        '\n',
        '\n',
        '\n'
    ];
    let expected = [{
            'oldStart': v_4,
            'oldLines': v_5,
            'newStart': v_6,
            'newLines': v_7,
            'lines': v_8,
            'linedelimiters': v_9
        }];
    let v_2 = 'aa';
    let v_3 = 'aab';
    let actual = string_difference_get_external(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}