import { log } from '../../log.mjs';
import { command_line } from '../line.mjs';
export async function command_line_try(command_text) {
    try {
        console.log('asdf ' + command_text)
        await command_line(command_text);
    } catch (e) {
        log(e);
        throw e;
    }
}