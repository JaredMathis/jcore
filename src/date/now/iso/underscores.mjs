import { string_replace } from '../../../string/replace.mjs';
import { function_name_separator } from '../../../function/name/separator.mjs';
import { date_now_iso } from '../iso.mjs';
export function date_now_iso_underscores() {
    let iso = date_now_iso();
    for (let r of [
            '-',
            ':',
            '.'
        ]) {
        let v = function_name_separator();
        iso = string_replace(iso, r, v);
    }
    iso = string_replace(iso, 'Z', '');
    return iso;
}