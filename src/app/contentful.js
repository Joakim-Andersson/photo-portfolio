import { createClient } from 'contentful';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchPhotos() {
    try {
        const assets = await client.getAssets();

        const photos = assets.items.map(asset => {
            const { title, file } = asset.fields;
            const tags = asset.metadata.tags.map(tag => tag.sys.id);

            return {
                id: asset.sys.id,
                title: title || 'Untitled',
                image: file.url,
                tags: tags,
            };
        });

        return photos;
    } catch (error) {
        console.error('Error fetching photos:', error);
        return [];
    }
}
