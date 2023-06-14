import { arguments_assert } from '../../../arguments/assert.mjs';
import { Octokit } from 'octokit';
export async function git_hub_repository_issues() {
    arguments_assert(arguments, []);
    const octokit = new Octokit({ auth: 'YOUR-TOKEN' });
    await octokit.request('GET /repos/{owner}/{repo}/issues', {
        owner: 'github',
        repo: 'docs',
        per_page: 2
    });
}