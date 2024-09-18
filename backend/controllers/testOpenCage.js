const axios = require('axios');
const openCageApiKey = '92af3cb9bab24d16b3c9609fae5655be';

const testOpenCageApi = async () => {
    const city = 'Nairobi';
    //const openCageApiKey = 'your_opencage_api_key';
    console.log('OpenCage API Key:', openCageApiKey);
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${openCageApiKey}`;
    
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching city coordinates:', error);
    }
};

testOpenCageApi();
