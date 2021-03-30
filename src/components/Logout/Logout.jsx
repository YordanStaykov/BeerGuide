import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext'
import { auth } from '../../config/firebase'


const Logout = ({
    history
}) => {
    const [user, setUser] = useContext(UserContext)

    useEffect(() => {
        auth.signOut()
            .then(() => {
                sessionStorage.removeItem('user');
                setUser(null)
            })
        history.push('/')
    }, [])

    return (
        <>
            <h1>Logout</h1>
        </>
    );
};

export default Logout;