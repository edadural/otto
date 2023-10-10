import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import Header from '../../components/header/Header';
import axios from 'axios';

const Login = () => {
    const [message, setMessage] = useState('');

    const handleFormSubmit = async (values) => {

        // Kullanıcının girdiği e-posta ve şifreyi alın
        const { email, password } = values;

        try {
            const response = await axios.post('http://localhost:3000/api/login', { "email": email, "password": password });
            
            // Başarılı yanıt kontrolü
            if (response.data.message === 'Başarılı giriş') {
                setMessage('Giriş başarılı');
                console.log("giriş başarılı");
            } else {
                setMessage('E-posta veya şifre hatalı');
            }
        } catch (error) {
            console.error('İstek hatası:', error);
        }
    };

    return (
        <>
            <Header />
            <div className='flex flex-col justify-center w-60'>
                <Form layout='vertical' onFinish={handleFormSubmit}>
                    <Form.Item
                        label='E-mail'
                        name='email'
                        rules={[
                            {
                                required: true,
                                message: 'E mail Alanı Boş Bırakılamaz!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Şifre'
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Şifre Alanı Boş Bırakılamaz!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit' className='w-full'>
                            Giriş Yap
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default Login;
