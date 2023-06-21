import { list_map_async } from '../../../list/map/async.mjs';
import { function_add_string } from '../string.mjs';
import { js_identifier_multiple_parse } from '../../../js/identifier/multiple/parse.mjs';
import { js_identifier_combine } from '../../../js/identifier/combine.mjs';
import { equal_by } from '../../../equal/by.mjs';
import { string_is } from '../../../string/is.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { assert } from '../../../assert.mjs';
import { list_length } from '../../../list/length.mjs';
import { range } from '../../../range.mjs';
import { list_get } from '../../../list/get.mjs';
import { string_split_comma } from '../../../string/split/comma.mjs';
export async function function_add_string_multiple(prefix, keys_unparsed, values_unparsed) {
    arguments_assert(arguments, [
        js_identifier_is,
        string_is,
        string_is
    ]);
    let keys = js_identifier_multiple_parse(keys_unparsed);
    let values = string_split_comma(values_unparsed);
    let v = equal_by(list_length, keys, values);
    assert(v);
    let v_4 = list_length(keys);
    let v_2 = range(v_4);
    let result = await list_map_async(v_2, async function v_5(i) {
        let key = list_get(keys, i);
        let value = list_get(values, i);
        let function_name = js_identifier_combine(prefix, key);
        let v_3 = await function_add_string(function_name, value);
        return v_3;
    });
    return result;
}