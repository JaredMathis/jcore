import { arguments_assert } from '../../../arguments/assert.mjs';
import { Octokit } from 'octokit';
import { file_json_read } from '../../../file/json/read.mjs';
export async function git_hub_repository_issues() {
    arguments_assert(arguments, []);
    let p = await file_json_read('../private.json');
    const octokit = new Octokit({ auth: 'YOUR-TOKEN' });
    await octokit.request('GET /repos/{owner}/{repo}/issues', {
        owner: 'github',
        repo: 'docs',
        per_page: 2
    });
}