import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_index_of } from '../../../of.mjs';
export function string_index_of_test_generated_5() {
    arguments_assert(arguments, []);
    let expected = -1;
    let actual = string_index_of('', 'b');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}