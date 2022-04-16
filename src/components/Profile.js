import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';


const Profile = () => {
    const {user, setUser} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
  
    const handleLogin = () => {
        setLoading(true)
        setTimeout(() =>{
            
            setUser({
                id:1,
                username: "fatisenko",
                bio: "lorem ipsum"
        
            })
        setLoading(false)
        }, 1500)
        }
    const handleLogout = () => {
        setUser(null)
    }    
  
  return (
    <div>

        {
            !user ? (
                <button onClick={handleLogin}>{loading ? 'Loading...' : "Login"}</button>
            ) : (
                <button onClick={handleLogout}>Logout</button>
            )
        }
      
        <br/>
        <code>{JSON.stringify(user)}</code>
    </div>
  )
}

export default Profile