import { arguments_assert } from '../../../arguments/assert.mjs';
import { directory_source } from '../../source.mjs';
import { directory_separator } from '../../separator.mjs';
import { directory_current } from '../../current.mjs';
export function directory_current_to_source() {
    arguments_assert(arguments, []);
    let dcws = `${ directory_current() }${ directory_separator() }`;
    return `${ dcws }${ directory_source() }`;
}