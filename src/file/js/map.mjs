import { file_overwrite } from '../overwrite.mjs';
import { js_unparse } from '../../js/unparse.mjs';
import { function_run } from '../../function/run.mjs';
import { file_js_path_to_args } from './path/to/args.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { file_js_overwrite } from './overwrite.mjs';
export async function file_js_map(function_name_mapper, file_path) {
    let args = await file_js_map_args(file_path, mapper);
    function mapper() { 
        await function_run(function_name_mapper, [args]);
    }
}


async function file_js_map_args(file_path, mapper) {
    let args = await file_js_path_to_args(file_path);
    mapper(args);
    await file_js_overwrite(args);
    return args;
}

