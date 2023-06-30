import { command_line } from '../line.mjs';
export async function command_line_website(url) {
    let v = `start ${ url }`;
    await command_line(v);
}