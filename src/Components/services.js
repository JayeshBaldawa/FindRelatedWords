import axios from 'axios';

class services
{
    async getSimilarWords(word)
    {
        const URL = "https://words.bighugelabs.com/api/2/{YOUR_API_KEY_HERE}/"+word+"/json";
        return await axios.get(URL)
    }

}

export default new services();
