import { directory_source } from '../../source.mjs';
import { directory_separator } from '../../separator.mjs';
import { directory_current } from '../../current.mjs';
export function directory_current_to_source() {
    return `${ directory_current() }${ directory_separator() }${ directory_source() }`;
}