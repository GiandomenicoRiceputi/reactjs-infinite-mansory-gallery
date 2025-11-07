// Unsplash API Service
const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const UNSPLASH_API_URL = 'https://api.unsplash.com';

export interface UnsplashPhoto {
    id: string;
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string | null;
    description: string | null;
    user: {
        name: string;
    };
    width: number;
    height: number;
}

export const  fetchUnsplashPhotos =  async (page = 1, perPage = 12): Promise<UnsplashPhoto[]> => {
    try{
        const response = await fetch(
            `${UNSPLASH_API_URL}/photos?page=${page}&per_page=${perPage}&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const photos = await response.json();
        return photos;
    } catch (error) {
        console.log('Error fetching photos:', error);
        throw error;
    }
}