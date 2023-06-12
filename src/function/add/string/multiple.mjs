import { string_identifier_multiple_parse } from '../../../string/identifier/multiple/parse.mjs';
import { string_identifier_with_prefix } from '../../../string/identifier/with/prefix.mjs';
import { equal_by } from '../../../equal/by.mjs';
import { function_add_string_prefix } from './prefix.mjs';
import { string_is } from '../../../string/is.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { assert } from '../../../assert.mjs';
import { list_length } from '../../../list/length.mjs';
import { range } from '../../../range.mjs';
import { list_get } from '../../../list/get.mjs';
export async function function_add_string_multiple(prefix, keys_unparsed, values_unparsed) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_is,
        string_is
    ]);
    let keys = string_identifier_multiple_parse(keys_unparsed);
    assert(equal_by(list_length, keys, values));
    for (let i of range(list_length(keys))) {
        let key = list_get(keys, i);
        let value = list_get(values, i);
        let function_name = string_identifier_with_prefix(prefix, key);
        await function_add_string_prefix(function_name, value);
    }
}