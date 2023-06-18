import { string_split_comma } from '../../split/comma.mjs';
import { list_all } from '../../../list/all.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_is } from '../../is.mjs';
import { assert } from '../../../assert.mjs';
import { string_identifier_is } from '../is.mjs';
export function string_identifier_multiple_parse(values) {
    arguments_assert(arguments, [string_is]);
    let result = string_split_comma(values);
    let v = list_all(result, string_identifier_is);
    assert(v);
    return result;
}