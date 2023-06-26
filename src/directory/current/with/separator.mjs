import { metadata } from '../../../metadata.mjs';
import { directory_separator } from '../../separator.mjs';
import { directory_current } from '../../current.mjs';
export function directory_current_with_separator() {
    let v = directory_current();
    let v_2 = directory_separator();
    return `${ v }${ v_2 }`;
    metadata([]);
}