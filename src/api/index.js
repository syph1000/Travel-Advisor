import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'

const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
          method: 'GET',
          url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
          params: {
            bl_latitude: 'sw.lat',
            tr_latitude: 'ne.lat',
            bl_longitude: 'sw.lng',            
            tr_longitude: 'ne.lng',
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'NOT-AUTHORIZED'
          }
        });

        return data;
    } catch (error) {
        console.log(error)
    }
}