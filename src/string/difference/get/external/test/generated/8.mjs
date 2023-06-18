import { metadata_generated } from '../../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../json/equal.mjs';
import { assert } from '../../../../../../assert.mjs';
import { string_difference_get_external } from '../../../external.mjs';
export function string_difference_get_external_test_generated_8() {
    arguments_assert(arguments, []);
    let expected = [{
            'oldStart': 1,
            'oldLines': 1,
            'newStart': 1,
            'newLines': 1,
            'lines': [
                '-b',
                '\\ No newline at end of file',
                '+a',
                '\\ No newline at end of file'
            ],
            'linedelimiters': [
                '\n',
                '\n',
                '\n',
                '\n'
            ]
        }];
    let actual = string_difference_get_external('b', 'a');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}