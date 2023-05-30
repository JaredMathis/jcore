import { command_line } from '../line.mjs';
export async function command_line_try(command_text) {
    await command_line(command_text);
}