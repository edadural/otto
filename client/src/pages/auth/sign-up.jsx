import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import appAxios from '../../helper/appAxios'

export function SignUp() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  var data = {
    'name': name,
    'surname': surname,
    'email': email,
    'password': password
  }

  var kayitOl = () => {
    appAxios.post('/register', data)
      .then(response => {
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('surname', response.data.surname);
        localStorage.setItem('mail', response.data.mail);
        navigate(`/sign-in`);
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
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Kayıt Ol
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input type="name" label="Adınız" size="lg" value={name} onChange={(e) => setName(e.target.value)} />
            <Input type="surname" label="Soyadınız" size="lg" value={surname} onChange={(e) => setSurname(e.target.value)} />
            <Input type="email" label="Email-Adresi" size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" label="Şifre" size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="-ml-2.5">
              <Checkbox label="Tüm sözleşmeyi kabul ediyorum." />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={kayitOl}>
              Kayıt Ol
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Zaten hesabınız var mı?
              <Link to="/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Giriş
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
