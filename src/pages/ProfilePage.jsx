import axios from "axios";
import ProfileCard from "../components/ProfileCard"
import { useState, useEffect } from "react"

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);
    const fetchProfile = async() => {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://127.0.0.1:8000/api/me', {
            headers:{
                Authorization:`Bearer ${token}`,
                Accept: "application/json"
            }
        })
        setProfile(res?.data?.data ?? null);
    }

    console.log(profile);
    

    // useEffect(function(){})
    useEffect(()=>{
        fetchProfile();
    }, [])
  return (
    <div>
      <ProfileCard photo="https://i.pravatar.cc/150?img=4" name={profile?.name} job={profile?.email} bio="Bismillah"/>
    </div>
  )
}

export default ProfilePage
