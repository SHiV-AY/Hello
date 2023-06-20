

const api ="http://localhost:3001";

const loginServ = async (user)=>{
    // const user ={
    //     "email":"Juicewrld@songs.com"u,
    //     "password":"Juicewrld@123"user
    // }

    try {
        console.log("servlog",user);
        const res = await fetch (api+'/login',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          });
        const jsonData = await res.json();
        console.log(jsonData);
        if (jsonData) {
          alert("successfull")
        }
    } catch (error) {
        console.log(error);
    }
}
export default loginServ;