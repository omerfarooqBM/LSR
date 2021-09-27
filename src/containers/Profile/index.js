import MenuAppBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/Card';
import { useHistory } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import BasicButtons from '../../components/Button'
import {useState} from 'react'


function Profile() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <MenuAppBar title="Profile" />
            ِ<Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} lg={6} md={12}>
                        <MyCard>
                            <h1>Profile</h1>
                        </MyCard>

                    </Grid>
                   
                    <BasicButtons onClick={() => {

                        const auth = getAuth();
                        signOut(auth).then(() => {
                            window.location.reload()

                        })
                            .catch((error) => {
                            });
                    }} title={loading ? "Loading...":"LOGOUT"} />
                </Grid>
            </Container>
        </div>
    )
}

export default Profile;