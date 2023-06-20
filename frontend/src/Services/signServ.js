
const api="http://localhost:3001";

const signServ = async (user)=>{

    try {
        const res = await fetch(api+'/signup',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(user),
           
        });
        const jsonData = await res.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error);
    }

}
export default signServ;