import api from "../../axios";
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN; 



  // Get initial Users(for  testing)
  export const searchUsers = async (text) => {
      const res = await api.get(`/search/users`,{ params: {q: text } },{
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });
    
     const item = res.data.items
      return item
     
  };
  //Get a Single User
 export const getUser = async (login) => {
    const res = await api.get(`/users/${login}`,{
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
    });
    const itemData = res.data
    return itemData 
  }

 
      