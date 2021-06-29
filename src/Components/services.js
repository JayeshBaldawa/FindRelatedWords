import axios from 'axios';

class services
{
    async getSimilarWords(word)
    {
        const URL = "https://words.bighugelabs.com/api/2/19361a98e80fba07832c0fec3aa0a8e2/"+word+"/json";
        return await axios.get(URL)
    }

}

export default new services();