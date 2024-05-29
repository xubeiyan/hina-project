export const load = () => {
    let content = 
`# This is edit test
## There are few questions giving a robot

1. if you are human, what thing do you want to do?
[ ] play cards
[ ] test a ReCAPTCHA

    `;
    let endTime = '2024-06-15T19:00'
    return {
        content,
        endTime
    }
}