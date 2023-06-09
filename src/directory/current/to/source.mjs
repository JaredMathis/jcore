import { directory_current_with_separator } from '../with/separator.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { directory_source } from '../../source.mjs';
export function directory_current_to_source() {
    arguments_assert(arguments, []);
    return `${ directory_current_with_separator() }${ directory_source() }`;
}