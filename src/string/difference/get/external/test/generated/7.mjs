import { integer_value_1 } from '../../../../../../integer/value/1.mjs';
import { metadata_generated } from '../../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../json/equal.mjs';
import { assert } from '../../../../../../assert.mjs';
import { string_difference_get_external } from '../../../external.mjs';
export function string_difference_get_external_test_generated_7() {
    arguments_assert(arguments, []);
    let expected = [{
            'oldStart': integer_value_1(),
            'oldLines': integer_value_1(),
            'newStart': integer_value_1(),
            'newLines': integer_value_1(),
            'lines': [
                '-b',
                '\\ No newline at end of file',
                '+aa',
                '\\ No newline at end of file'
            ],
            'linedelimiters': [
                '\n',
                '\n',
                '\n',
                '\n'
            ]
        }];
    let actual = string_difference_get_external('b', 'aa');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}