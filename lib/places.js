import axios from 'axios';

export async function getPlacesIds() {
    const {data} = await axios.get(process.env.STRAPI + '/places');
    return data.map(({url}) => {
        return {
            params: {
                id: url
            }
        }
    })
}

export async function getPlace(url) {
    let {data} = await axios.get(process.env.STRAPI + `/places?url=${url}`)
    const place = JSON.parse(JSON.stringify(data));
    return {
        place
    }
}