import { string_combine } from '../../../../string/combine.mjs';
export function git_ignore_line_slash_add(gitignore_line_to_add) {
    return string_combine('/', gitignore_line_to_add);
}