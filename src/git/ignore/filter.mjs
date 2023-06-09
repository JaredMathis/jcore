import { string_starts_with } from '../../string/starts/with.mjs';
import { list_any } from '../../list/any.mjs';
import { directory_separator } from '../../directory/separator.mjs';
import { list_filter } from '../../list/filter.mjs';
import { git_ignore_lines } from './lines.mjs';
export async function git_ignore_filter(file_paths) {
    let gil = await git_ignore_lines();
    let filtered = list_filter(file_paths, f => {
        let with_slash = f + directory_separator();
        return list_any(gil, g => string_starts_with(f, with_slash) || equals(f, g));
    });
    return filtered;
}