import { command_line } from '../line.mjs';
export async function command_line_ffmpeg(before, file_path_temporary, middle, file_path_output) {
    let ffmpeg = `ffmpeg`;
    let command = `${ ffmpeg } ${ before } -i ${ file_path_temporary } ${ middle } ${ file_path_output }`;
    await command_line(command);
}