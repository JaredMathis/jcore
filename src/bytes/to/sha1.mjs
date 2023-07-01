import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import crypto from 'crypto';
import { arguments_assert } from '../../arguments/assert.mjs';
export function bytes_to_sha1(buffer) {
    arguments_assert(arguments, [arguments_assert_todo]);
    const hashSum = crypto.createHash('sha1');
    hashSum.update(buffer);
    const hex = hashSum.digest('hex');
    return hex;
}