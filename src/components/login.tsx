import React , { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
import { AuthService } from '../services/auth-service.tsx';
import { ToastServices } from '../utils/toast-services.tsx';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import './styles/login-style.scss'

export const Login = () => {
const [checked, setChecked] = React.useState(true);
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');
var nagivate = useNavigate();

const handleChange = (event) => {
  setChecked(event.target.checked);
};

const authService = new AuthService();
const toastService = new ToastServices();

const onSubmit = () => {
      authService.validateLogin(userName, password)
          .then((response) => {
              sessionStorage.setItem('Bearer', 'Bearer ' + response.data.accessToken)
              nagivate('/products');
          }, (error) => {
             toastService.showErrorRequestMessage(error);
          });
  }

return (
  <div style={{ padding: 30 }}>
    <Paper>
      <Grid className={"login"}
         container
         spacing={3}
         direction={'column'}
      >
        <Grid item xs={12}>
          <TextField label="Username" 
          onChange={(e) => setUserName(e.target.value)}></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type={'password'}
           onChange={(e) => setPassword(e.target.value)}></TextField>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Keep me logged in"
          />
        </Grid>
        <Grid item xs={12}>
          <Button   onClick={() => { onSubmit()}}
          fullWidth> Login </Button>
        </Grid>
      </Grid>
    </Paper>
    <ToastContainer/>
  </div>
);
}

