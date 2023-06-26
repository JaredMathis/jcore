import { metadata } from '../../../metadata.mjs';
import { string_split_comma } from '../../../string/split/comma.mjs';
import { list_all } from '../../../list/all.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_is } from '../../../string/is.mjs';
import { assert } from '../../../assert.mjs';
import { js_identifier_is } from '../is.mjs';
export function js_identifier_multiple_parse(values) {
    arguments_assert(arguments, [string_is]);
    let result = string_split_comma(values);
    let v = list_all(result, js_identifier_is);
    assert(v);
    return result;
    metadata([]);
}