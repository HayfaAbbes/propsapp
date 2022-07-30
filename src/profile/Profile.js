import react from 'react' 

export default function Profile ({firstName,Bio,profession,handleName}){


        
        return(
            <>
            <h1>Bonjour, {firstName} ,{Bio} , {profession}</h1>
            <button onClick={()=>handleName(firstName)}>Affiche</button>
           


            </>
         
        )
    

}