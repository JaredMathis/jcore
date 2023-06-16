import { string_comma } from '../../../comma.mjs';
import { string_split } from '../../../split.mjs';
import { string_identifier_sub_is } from '../is.mjs';
import { list_all } from '../../../../list/all.mjs';
import { assert } from '../../../../assert.mjs';
import { string_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_identifier_sub_multiple_parse(values, separator) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let result = string_split(values, separator);
    assert(list_all(result, string_identifier_sub_is));
    return result;
}