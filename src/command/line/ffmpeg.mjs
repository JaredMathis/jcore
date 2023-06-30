import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { command_line } from '../line.mjs';
export async function command_line_ffmpeg(file_path_temporary, before, middle, file_path_output) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let ffmpeg = `ffmpeg`;
    let command = `${ ffmpeg } ${ before } -i ${ file_path_temporary } ${ middle } ${ file_path_output }`;
    await command_line(command);
}