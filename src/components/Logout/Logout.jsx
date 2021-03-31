import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext'
import { auth } from '../../config/firebase'


const Logout = ({
    history
}) => {
    const [user, setUser] = useContext(UserContext)

    useEffect(() => {
        if (!user) {
            return history.push('/')
        }

        auth.signOut()
            .then(() => {
                sessionStorage.removeItem('user');
                setUser(null)
                return history.push('/')
            })

    }, [])

    return (
        <>
            <h1>Logout</h1>
        </>
    );
};

export default Logout;