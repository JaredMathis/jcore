import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import crypto from 'crypto';
import fs from 'fs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function bytes_to_sha1(buffer) {
    arguments_assert(arguments, [arguments_assert_todo]);
    const fileBuffer = fs.readFileSync('myfile.js');
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    const hex = hashSum.digest('hex');
}