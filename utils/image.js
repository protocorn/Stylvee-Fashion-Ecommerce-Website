import ImageUrlBuilder from '@sanity/image-url';
import client from './client';

function urlForThumbnail(source) {
    return ImageUrlBuilder(client).image(source).size(200, 240).url();
}

export {urlForThumbnail};