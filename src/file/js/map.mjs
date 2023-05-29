import { file_js_parse } from './parse.mjs';
import { file_overwrite } from '../overwrite.mjs';
import { js_unparse } from '../../js/unparse.mjs';
import { function_run } from '../../function/run.mjs';
export async function file_js_map(function_name_mapper, file_path) {
    let parsed = await file_js_parse(file_path);
    let args = {
        parsed,
        file_path
    };
    await function_run(function_name_mapper, [args]);
    let unparsed = js_unparse(parsed);
    await file_overwrite(file_path, unparsed);
}