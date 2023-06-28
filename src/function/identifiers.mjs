import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { js_identifiers } from '../js/identifiers.mjs';
import { function_parse } from './parse.mjs';
export async function function_identifiers(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let parsed = await function_parse(function_name);
    let identifiers = js_identifiers(parsed);
    return identifiers;
    metadata([]);
}