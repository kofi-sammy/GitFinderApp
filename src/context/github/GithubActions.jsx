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
      //Checking for Error
      if(res.status === 404){
        window.location = '/notfound'
      }else{
         return res.data 
         
      }

        // console.log(res.data)
 }