import axios from 'axios';
export const FETCH_PAGE_DATA = 'fetch page data';

export const updatePageData = (payload = {}) => ({
    type: FETCH_PAGE_DATA, payload,
});

export function fetchPageData(uri, data = {}) {
    const apiUri = `/api/${ uri }`;

    return dispatch => {

        console.log(apiUri);

        axios.get(apiUri).then((data) => console.log(data))


        // dispatch(updatePageData(pageData))
    }
};
