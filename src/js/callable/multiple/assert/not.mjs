import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { not } from '../../../../not.mjs';
import { js_callable_multiple } from '../../multiple.mjs';
import { assert } from '../../../../assert.mjs';
import { comment } from '../../../../comment.mjs';
export function js_callable_multiple_assert_not(parsed) {
    arguments_assert(arguments, [arguments_assert_todo]);
    comment(`To remove this assert, fix the code - right now it does not handle functions or arrows inside the exported function`);
    let v_2 = js_callable_multiple(parsed);
    let v = not(v_2);
    assert(v);
    metadata([]);
}