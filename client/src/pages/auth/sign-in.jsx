import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import appAxios from '../../helper/appAxios'

export function SignIn() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  var data = {
    'email': email,
    'password': password
  }

  var girisYap = () => {
    appAxios.post('/login', data)
      .then(response => {
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('token', response.data.token);
        navigate(`/home`);
      })
      .catch(error => {
        console.error('Giriş başarısız:', error);
      });
  }

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">

          <CardBody className="flex flex-col gap-4">
            <Input type="email" label="Email" value={email}
              onChange={(e) => setEmail(e.target.value)} size="lg" />
            <Input type="password" label="Şifre" value={password}
              onChange={(e) => setPassword(e.target.value)} size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Hatırla " />
            </div>
          </CardBody>

          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={girisYap}>
              Giriş Yap
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Hesabınız yok mu ?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Kayıt Ol
                </Typography>
              </Link>
            </Typography>
          </CardFooter>

        </Card>
      </div>
    </>
  );
}

export default SignIn;
