import { file_write } from "../file/write.mjs";
import { command_line } from "../command/line.mjs";
import { function_name_to_path } from "./name/to/path.mjs";

export async function function_add(function_name) {
    let function_path = function_name_to_path(function_name);
    await file_write(function_path, `export function ${function_name}() {
    
}`);
    await command_line(`code ${function_path}`);
}