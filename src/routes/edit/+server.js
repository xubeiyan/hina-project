import { json } from '@sveltejs/kit';
export const POST = async ({ request }) => {
    const { visitCode } = await request.json();
    if (visitCode == 'babel-cheap-drive-gloom') {
        return json({ code: 'EXIST', visitCode }, { status: 200 });
    }

    return json({ code: 'NOT_EXIST', visitCode }, { status: 200 });

}