import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_difference_get } from '../../../get.mjs';
export function string_difference_get_test_generated_2() {
    arguments_assert(arguments, []);
    let expected = [{
            'oldStart': 1,
            'oldLines': 1,
            'newStart': 1,
            'newLines': 1,
            'lines': [
                '-aa',
                '\\ No newline at end of file',
                '+b',
                '\\ No newline at end of file'
            ],
            'linedelimiters': [
                '\n',
                '\n',
                '\n',
                '\n'
            ]
        }];
    let actual = string_difference_get('aa', 'b');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}