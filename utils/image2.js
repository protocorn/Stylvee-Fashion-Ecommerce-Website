import ImageUrlBuilder from '@sanity/image-url';
import client from './client';

function urlForThumbnail1(source) {
    return ImageUrlBuilder(client).image(source).size(500, 800).url();
}
export { urlForThumbnail1 };