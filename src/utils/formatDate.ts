export default function formatDate(date: string) {
    const year = date.split('-').at(0);
    const month = new Date(date).toLocaleDateString('en-US', { month: 'short' });
    const day = date.split('-').at(2);

    return `${month} ${day}, ${year}`;
}
