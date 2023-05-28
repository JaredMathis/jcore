import { command_line } from "../../../command/line.mjs";

export async function file_open_vs_code(function_path) {
    await command_line(`code ${function_path}`);
}