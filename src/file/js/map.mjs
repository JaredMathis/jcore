import {file_js_parse} from '../../file/js/parse.mjs';
import {file_overwrite} from '../../file/overwrite.mjs';
import {js_unparse} from '../../js/unparse.mjs';
import {function_run} from '../../function/run.mjs';

export function file_js_map(file_path, function_name_mapper) {
    let parsed = await file_js_parse(file_path);

    await function_run(function_name_mapper)
    
    let unparsed = js_unparse(parsed);
    file_overwrite(file_path, unparsed);
}