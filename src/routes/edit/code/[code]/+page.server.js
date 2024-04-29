import { redirect } from '@sveltejs/kit';

export function load({ params }) {
    const reg = new RegExp("[a-zA-Z]{5}-[a-zA-Z]{5}-[a-zA-Z]{5}-[a-zA-Z]{5}");
    if (!reg.test(params.code)) {
        return {
            error: 'codeWrongFormat',
            code: params.code
        }
    }

    // TODO：检查数据库中是否存在

    // TODO：使用该条表单的uuid
    let uuid = '26b09bb5-c750-4718-861d-317a725ffee9';
    throw redirect(307, `/edit/id/${uuid}`);
}