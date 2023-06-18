import { function_name_separator } from '../../../../function/name/separator.mjs';
import { string_replace } from '../../../../string/replace.mjs';
import { log } from '../../../../log.mjs';
import { date_now_iso } from '../../../../date/now/iso.mjs';
import { file_path_json } from '../../../../file/path/json.mjs';
import { version_path_log_get } from '../get.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function version_path_log_now_get(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let log_path = version_path_log_get(repository_name);
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
    let v_2 = file_path_json(log_path, iso);
    return v_2;
}