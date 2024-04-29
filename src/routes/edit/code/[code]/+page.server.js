import { redirect } from '@sveltejs/kit';

export function load({ params }) {
    const reg = new RegExp("[a-zA-Z]{5}-[a-zA-Z]{5}-[a-zA-Z]{5}-[a-zA-Z]{5}");
    if (!reg.test(params.code)) {
        return {
            error: 'codeWrongFormat',
            code: params.code
        }
    }

    // 检查数据库中是否存在
    // TODO

    throw redirect(307, `/edit/id/${params.code}`);
}