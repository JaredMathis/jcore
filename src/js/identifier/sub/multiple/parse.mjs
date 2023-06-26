import { metadata } from '../../../../metadata.mjs';
import { string_split } from '../../../../string/split.mjs';
import { js_identifier_sub_is } from '../is.mjs';
import { list_all } from '../../../../list/all.mjs';
import { assert } from '../../../../assert.mjs';
import { string_is } from '../../../../string/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_identifier_sub_multiple_parse(values, separator) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let result = string_split(values, separator);
    let v = list_all(result, js_identifier_sub_is);
    assert(v);
    return result;
    metadata([]);
}