import { json } from '@sveltejs/kit';
export const POST = async ({ request, locals }) => {
    const { dbconn } = locals;
    const { visitCode } = await request.json();

    // TODO: 验证数据库中是否存在，并返回id
    const result = await dbconn.query('SELECT 1 + 1');
    console.log(result);
    if (visitCode == 'babel-cheap-drive-gloom') {
        return json({ code: 'EXIST', visitCode, id: '26b09bb5-c750-4718-861d-317a725ffee9' }, { status: 200 });
    }

    return json({ code: 'NOT_EXIST', visitCode }, { status: 200 });

}