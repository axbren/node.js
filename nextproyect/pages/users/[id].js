import {useRouter  } from "next/router";

const UserProfile = () =>{
    const{id} = useRouter();

    return <h1>Profile</h1>
}

export default UserProfile