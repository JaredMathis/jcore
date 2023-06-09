import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_difference_get } from '../../../get.mjs';
export function string_difference_get_test_generated_5() {
    arguments_assert(arguments, []);
    let expected = [{
            'oldStart': 1,
            'oldLines': 1,
            'newStart': 1,
            'newLines': 0,
            'lines': [
                '-b',
                '\\ No newline at end of file'
            ],
            'linedelimiters': [
                '\n',
                '\n'
            ]
        }];
    let actual = string_difference_get('b', '');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}