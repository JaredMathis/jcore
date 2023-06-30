import { file_json_write } from '../file/json/write.mjs';
import { git_hub_cache_file_path } from '../git/hub/cache/file/path.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { video_upload_single } from './upload/single.mjs';
import { list_first } from '../list/first.mjs';
import { string_starts_with } from '../string/starts/with.mjs';
import { list_filter } from '../list/filter.mjs';
import { function_name_separator } from '../function/name/separator.mjs';
import { video_path_prefix_get } from './path/prefix/get.mjs';
import { string_combine } from '../string/combine.mjs';
import { video_path_output } from './path/output.mjs';
import { directory_read } from '../directory/read.mjs';
export async function video_upload(video_key) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let video_path_output_files = await directory_read(video_path_output());
    let ish_video_1_path_prefix = string_combine(video_path_prefix_get(video_key), function_name_separator());
    let matches = list_filter(video_path_output_files, function v(f) {
        return string_starts_with(f, ish_video_1_path_prefix);
    });
    let first = list_first(matches);
    let file_path = git_hub_cache_file_path(video_upload_single, args);
    await file_json_write(file_path, {
        'success': true,
        'code': 201,
        'message': 'File uploaded',
        'id': '1evMAgv3',
        'public_id': 'fil-1e',
        'folder': null,
        'folder_id': null,
        'title': 'ish_video_1',
        'description': 'ish_video_1',
        'tags': '',
        'type': 'video',
        'extension': 'mp4',
        'privacy': 'public',
        'password': null,
        'size': 66341647,
        'width': 1920,
        'height': 1080,
        'duration': 720.42,
        'thumb_id': null,
        'option_hls': 'disabled',
        'option_download': 'disabled',
        'option_ad': 'enabled',
        'option_transform': 'enabled',
        'wm_id': null,
        'url_preview': 'https://media.publit.io/file/fil-1e.mp4',
        'url_thumbnail': 'https://media.publit.io/file/w_300,h_200,c_fill/fil-1e.jpg',
        'url_short': 'https://media.publit.io/file/1evMAgv3.mp4',
        'url_embed': 'https://media.publit.io/file/fil-1e.html',
        'url_stream': 'https://media.publit.io/file/fil-1e.mp4',
        'url_download': 'https://media.publit.io/download/fil-1e.mp4?at=eyJpdiI6IkdjRlQ0VUt4cmdVb1hBYndKZ0JteEE9PSIsInZhbHVlIjoicHFJVVBncS9mc2NhUGJkMkQ4LytsbXcxTzdCRUJwcHduTkYrTEZOUUFQWT0iLCJtYWMiOiI5Nzk1NGEwZTZlOTJmMTFkOWNiNWQzZTM1NWM4Zjk1MTdkN2I0NDdjOTQ1MjM4MzlkZDQ3YWY3YTE1YmFlNWI2IiwidGFnIjoiIn0=',
        'versions': 0,
        'hits': 0,
        'created_at': '2023-06-30 18:17:53',
        'updated_at': '2023-06-30 18:17:53'
    });
    return;
    return await video_upload_single(first);
}