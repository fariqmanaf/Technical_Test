export const getSomeNews = async (kategori) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${kategori}`);
    const result = await response.json();

    if (!response.ok) {
        throw new Error(result?.message || "Failed to fetch data");
    }

    return result;
};
