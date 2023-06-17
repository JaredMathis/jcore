import { js_callable_multiple } from '../../multiple.mjs';
import { assert } from '../../../../assert.mjs';
import { comment } from '../../../../comment.mjs';
export function js_callable_multiple_assert_not(parsed) {
    comment(`To remove this assert, fix the code - right now it does not handle functions or arrows inside the exported function`);
    assert(not(js_callable_multiple(parsed)));
}