import crypto from 'crypto';
import fs from 'fs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function bytes_to_sha1() {
    arguments_assert(arguments, []);
    const fileBuffer = fs.readFileSync('myfile.js');
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    const hex = hashSum.digest('hex');
}