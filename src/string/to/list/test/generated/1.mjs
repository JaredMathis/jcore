import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_to_list } from '../../../list.mjs';
export function string_to_list_test_generated_1() {
    arguments_assert(arguments, []);
    let expected = [
        'a',
        'a'
    ];
    let actual = string_to_list('aa');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}