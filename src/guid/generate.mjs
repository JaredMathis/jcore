import { metadata } from '../metadata.mjs';
import * as uuid from 'uuid';
import { arguments_assert } from '../arguments/assert.mjs';
export function guid_generate() {
    arguments_assert(arguments, []);
    let v = uuid.v4();
    return v;
    metadata([]);
}