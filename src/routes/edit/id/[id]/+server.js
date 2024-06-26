import { json } from '@sveltejs/kit';
// 保存修改的表单
export const POST = async ({ request, params }) => {
    const { content, endTime } = await request.json();
    const { id } = params;

    return json({ code: 'CREATE_OK', content, endTime, id }, { status: 201 })
}