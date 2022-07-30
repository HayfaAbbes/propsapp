import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import Image from './profile/Image';

function App() {

  // const data = [
  //   {
  //     firstName: "Hassen",
  //     lastName: "knani"
  //   },
  //   {
  //     firstName: "wafa",
  //     lastName: "knani"
  //   },
  //   {
  //     firstName: "haifa",
  //     lastName: "knani"
  //   },
  //   {
  //     firstName: "saif",
  //     lastName: "knani"
  //   },
  // ]
  // fonction
  const profile =
  {
    fullName: "hayfa abbes",
    bio: "aaa",
    profession: "web developer"

  }
  const handleName=(fullName)=>{alert(fullName)};
  return (
    <div>
     
       <Profile firstName={profile.fullName} Bio={profile.bio} profession={profile.profession} handleName={handleName} />
       <Image/>
    

    </div>
  
  );
}

export default App;
