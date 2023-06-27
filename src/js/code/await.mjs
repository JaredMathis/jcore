import { js_keyword_await } from '../keyword/await.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function js_code_await(awaited) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return `${ js_keyword_await() } ${ awaited }`;
    metadata([]);
}