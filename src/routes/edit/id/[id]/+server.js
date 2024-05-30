import { json } from '@sveltejs/kit';
export const POST = async ({ request }) => {
    const { content, endTime } = await request.json();

    return json({ code: 'CREATE_OK', content, endTime }, { status: 201 })
}