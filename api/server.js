const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors({
    origin: '*', // veya '*' tüm isteklere izin verir (güvenli değil)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    origin: true,
    credentials: true
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());


app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    console.log(`APİ ÇALIŞTI`);
    console.log("email:", email);
    console.log("password:", password);
    if (email === 'eda@gmail.com' && password === 'eda') {
        res.status(200).json({ message: 'Başarılı giriş' });
    } else {
        res.status(401).json({ message: 'Kullanıcı adı veya şifre hatalı' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
