import { string_identifier_is } from '../../is.mjs';
import { list_all } from '../../../../list/all.mjs';
import { assert } from '../../../../assert.mjs';
import { string_split_comma } from '../../../split/comma.mjs';
import { string_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_identifier_sub_multiple_parse(values) {
    arguments_assert(arguments, [string_is]);
    let result = string_split_comma(values);
    assert(list_all(result, string_identifier_is));
    return result;
}