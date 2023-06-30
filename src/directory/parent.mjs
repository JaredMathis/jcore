import { directory_current } from './current.mjs';
export function directory_parent() {
    return `${ directory_current() }${ directory_current() }`;
}