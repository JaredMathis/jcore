import * as uuid from 'uuid';
import { arguments_assert } from '../arguments/assert.mjs';
export function guid_generate() {
    arguments_assert(arguments, []);
    return uuid.v4();
}