import { integer_value_0 } from '../../../../../../integer/value/0.mjs';
import { integer_value_1 } from '../../../../../../integer/value/1.mjs';
import { metadata_generated } from '../../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../json/equal.mjs';
import { assert } from '../../../../../../assert.mjs';
import { string_difference_get_external } from '../../../external.mjs';
export function string_difference_get_external_test_generated_10() {
    arguments_assert(arguments, []);
    let expected = [{
            'oldStart': integer_value_1(),
            'oldLines': integer_value_0(),
            'newStart': integer_value_1(),
            'newLines': integer_value_1(),
            'lines': [
                '+aab',
                '\\ No newline at end of file'
            ],
            'linedelimiters': [
                '\n',
                '\n'
            ]
        }];
    let actual = string_difference_get_external('', 'aab');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}