import { redirect } from '@sveltejs/kit';

export const load = ({ params }) => {
    const id = params.id;
    if (id != '26b09bb5-c750-4718-861d-317a725ffee9') {
        throw redirect(307, `/edit/invalidId`);
    }

    let content =
        `# This is edit test
## There are few questions giving a robot

1. if you are human, what thing do you want to do?
[ ] play cards
[ ] test a ReCAPTCHA

    `;
    let endTime = '2024-06-15T19:00'
    return {
        id,
        content,
        endTime
    }
}