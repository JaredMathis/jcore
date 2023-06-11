import { file_extension_json } from '../extension/json.mjs';
export function file_name_json(version) {
    return `${ version }${ file_extension_json() }`;
}