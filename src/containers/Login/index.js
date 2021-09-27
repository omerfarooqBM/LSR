import MenuAppBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/Card';
import BasicTextFields from '../../components/Input';
import BasicButtons from '../../components/Button'
import './css/style.css'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { auth, signInWithEmailAndPassword } from '../../config/Firebase'
function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   const history = useHistory();

   const login = () => {
      setLoading(true)
      signInWithEmailAndPassword(auth, email, password)
         .then((res) => {
            setLoading(false)
            history.push("/")
            console.log(res)
         })
         .catch((err) => {
            setLoading(false)
            console.log(err)
         })
   }
   return (
      <div>
         <MenuAppBar title="Login" />
         ِ<Container>
            <Grid container justifyContent="center">
               <Grid item xs={12} lg={6} md={12}>
                  <MyCard>
                     <h1>Login</h1>
                     <div className="mt-20">
                        <BasicTextFields onChange={(e) => setEmail(e.target.value)} value={email} label="Email" type="email" />
                     </div>
                     <div className="mt-20">
                        <BasicTextFields onChange={(e) => setPassword(e.target.value)} value={password} label="Password" type="password" />
                     </div>
                     <div className="mt-20">
                        <BasicButtons onClick={login} title={loading ? "Loading..." : "LOGIN"} />
                     </div>
                     <div className="mt-20" style={{ textAlign: 'center' }}>
                        <Link to="/signup">Register now</Link>
                     </div>
                  </MyCard>
               </Grid>
            </Grid>
         </Container>
      </div>
   )
}

export default Login;