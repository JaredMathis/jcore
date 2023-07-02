import { task_comment_video } from '../video.mjs';
import { video_segment } from '../../../video/segment.mjs';
export async function task_comment_video_segment(video_key, issue_number) {
    await video_segment(video_key);
    await task_comment_video(issue_number, video_key);
}