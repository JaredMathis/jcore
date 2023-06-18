import { not } from '../../not.mjs';
import { string_identifier_multiple_parse } from '../../string/identifier/multiple/parse.mjs';
import { function_auto } from '../auto.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
import { list_empty } from '../../list/empty.mjs';
import { string_is } from '../../string/is.mjs';
export async function function_auto_multiple(function_names_string) {
    arguments_assert(arguments, [string_is]);
    let function_names = string_identifier_multiple_parse(function_names_string);
    let v_2 = list_empty(function_names);
    let v = not(v_2);
    assert(v);
    for (let f of function_names) {
        await function_auto(f);
    }
}