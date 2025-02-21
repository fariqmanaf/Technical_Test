export function dateFormatter(stringDate) {
    const date = new Date(stringDate);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("id-ID", options);
}
