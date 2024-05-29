import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
    try {
        const photoPromise = uploadPhoto();
        const userPromise = createUser();

        const [photo, user] = await Promise.all([photoPromise, userPromise]);

        return {
            photo,
            user
        };
    } catch (error) {
        // If one of the async functions fails, return an empty object
        return {
            photo: null,
            user: null
        };
    }
}

export default asyncUploadUser;

