import { useState } from 'react';



const useLoggedIn = () => {
    const [loggedIn, setloggedIn] = useState(false);

    return {loggedIn, setloggedIn};
}

export default useLoggedIn;
