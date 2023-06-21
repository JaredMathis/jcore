import { list_empty_not } from '../../list/empty/not.mjs';
import { js_identifier_multiple_parse } from '../../js/identifier/multiple/parse.mjs';
import { function_auto } from '../auto.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
import { string_is } from '../../string/is.mjs';
export async function function_auto_multiple(function_names_string) {
    arguments_assert(arguments, [string_is]);
    let function_names = js_identifier_multiple_parse(function_names_string);
    let v = list_empty_not(function_names);
    assert(v);
    for (let f of function_names) {
        await function_auto(f);
    }
}