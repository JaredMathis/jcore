import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { string_replace } from '../../../string/replace.mjs';
import { function_name_separator } from '../../../function/name/separator.mjs';
import { date_now_iso } from '../iso.mjs';
export function date_now_iso_underscores() {
    arguments_assert(arguments, []);
    let iso = date_now_iso();
    for (let r of [
            '-',
            ':',
            '.'
        ]) {
        let v = function_name_separator();
        iso = string_replace(iso, r, v);
    }
    let v_2 = 'Z';
    let v_3 = '';
    iso = string_replace(iso, v_2, v_3);
    return iso;
    metadata([]);
}