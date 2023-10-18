const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    origin: true,
    credentials: true
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

// veritabanı bağlantı bilgileri
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ottonomwebdb',
    password: '5432',
    port: 5432
});

const secretKey = 'your-secret-key';

app.use(express.json());

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    pool.query('SELECT * FROM users WHERE mail = $1 and password = $2', [email, password], (error, results) => {
        if (error) {
            console.error('Veri çekme hatası:', error);
            res.status(500).json({ message: 'Sunucu hatası' });
        } else {
            const user = results.rows[0];
            if (user) {
                const token = jwt.sign({ userId: user.id, email: user.mail }, secretKey, {
                    expiresIn: "1h",
                });
                pool.query(
                    'UPDATE users SET token = $1 WHERE mail = $2',
                    [token, email],
                    (error, results) => {
                        if (error) {
                            console.error('Token güncelleme hatası:', error);
                        }
                    }
                );
                res.status(200).json({ token, name: user.username });
            } else {
                res.status(401).json({ message: 'Kullanıcı adı veya şifre hatalı' });
            }
        }
    });
});

app.post('/api/logout', (req, res) => {
    const token = req.headers.token;
    console.log(token);
    // çıkış yapmak için token kontrolü yapılır.
    // token veritabanındakiyle uyuşuyorsa ve
    // token jwt'den kontrol edilir halen geçerliyse
    // token null oarak güncellenir.

    // yani şimdi node.js'te jwt ile token doğrulamaya bak. neden 
    // burada lazım olmucak ama ileride lazım olacak öğrenmiş olursun
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            console.error('Token doğrulama hatası:', err);
            res.status(401).json({ message: 'Token geçersiz' });
        } else {
            // Token veritabanındakiyle uyuşuyorsa ve hala geçerliyse token'ı null olarak güncelle
            pool.query(
                'UPDATE users SET token = NULL WHERE token = $1',
                [token],
                (error, results) => {
                    if (error) {
                        console.error('Token silme hatası:', error);
                        res.status(500).json({ message: 'Sunucu hatası' });
                    } else {
                        console.log('Çıkış yapıldı');
                        res.status(200).json({ message: 'Çıkış yapıldı' });
                    }
                }
            );
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
