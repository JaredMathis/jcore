import { metadata } from '../metadata.mjs';
import { function_name_get } from '../function/name/get.mjs';
import { file_json_write } from '../file/json/write.mjs';
import { version_path_log_now_get } from './path/log/now/get.mjs';
export async function version_log(repository_name, fn, args, message, data) {
    let log_path = version_path_log_now_get(repository_name);
    let v = {
        function_name: function_name_get(fn),
        arguments: args,
        message: message,
        data: data
    };
    await file_json_write(log_path, v);
    metadata([]);
}