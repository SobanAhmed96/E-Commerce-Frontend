import axios from 'axios';

export const GetAllProducts =async () => {
            try {
              const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/getAllProduct`);
              if(res.data.data){
                 const data = res.data.data;
                 return data;
              }else{
                return [];
              }
            } catch (error) {
                console.log(error);
            }
}
