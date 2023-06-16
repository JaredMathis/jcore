import { list_map_async } from '../../../list/map/async.mjs';
import { function_add_string } from '../string.mjs';
import { string_identifier_multiple_parse } from '../../../string/identifier/multiple/parse.mjs';
import { string_identifier_combine } from '../../../string/identifier/combine.mjs';
import { equal_by } from '../../../equal/by.mjs';
import { string_is } from '../../../string/is.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { assert } from '../../../assert.mjs';
import { list_length } from '../../../list/length.mjs';
import { range } from '../../../range.mjs';
import { list_get } from '../../../list/get.mjs';
import { string_split_comma } from '../../../string/split/comma.mjs';
export async function function_add_string_multiple(prefix, keys_unparsed, values_unparsed) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_is,
        string_is
    ]);
    let keys = string_identifier_multiple_parse(keys_unparsed);
    let values = string_split_comma(values_unparsed);
    assert(equal_by(list_length, keys, values));
    let result = await list_map_async(range(list_length(keys)), async i => {
        let key = list_get(keys, i);
        let value = list_get(values, i);
        let function_name = string_identifier_combine(prefix, key);
        return await function_add_string(function_name, value);
    });
    return result;
}