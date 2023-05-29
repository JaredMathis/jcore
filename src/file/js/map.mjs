import { file_overwrite } from '../overwrite.mjs';
import { js_unparse } from '../../js/unparse.mjs';
import { function_run } from '../../function/run.mjs';
import { file_js_path_to_args } from './path/to/args.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { file_js_overwrite } from './overwrite.mjs';
import { file_js_map_args } from './map/args.mjs';
export async function file_js_map(function_name_mapper, file_path) {
    await file_js_map_args(file_path, mapper);
    async function mapper(args) { 
        await function_run(function_name_mapper, [args]);
    }
}


