import { directory_separator } from '../../separator.mjs';
import { directory_current } from '../../current.mjs';
export function directory_current_with_separator() {
    return `${ directory_current() }${ directory_separator() }`;
}