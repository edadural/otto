import axios from 'axios';

const appAxios = axios.create({
  baseURL: 'http://localhost:8050/api',
  headers: {
    // "Content-type": 'application/json;', // bu post ederken veriyi nasıl göndereceğinle alakalı bişeydi
  },
});

function getToken() {
  const localStorageToken = localStorage.getItem('token');
  if (localStorageToken) {
    return localStorageToken;
  }
  return null;
}

appAxios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['token'] = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default appAxios;

//burada dedikki 3-8 satır arasında. senin sabit değerlerin bunlar sen proje baştan başlasa da hep devam etse de bunları kullancan.
//10. satırda token değeri alan fonk önemli dğeil.
// 18-29 arasında da request kullanılacağı zaman (giriş yap tıkladığımızda meseka) gel buraya bi bak. token değerini al. create edilmiş axios'ta kullan diyoruz. 
// 18-29 arasında kontrol edip, oluşturuyo mu yukarda token ı
// sen giriş yapınca token oluşuyo. burası sadece o tokenı her istekte tekrar tekrar alıyo 18-29 arasında mı evet oke 
// oraya farklı şeyler de ekleyebilirsin. sabit olanlar 3-8 arasına 
// dinamik olanlar 18-29
// daha gud oke 
// mesela ben backend'e yazar ve name göndermek istiyom. yazar hep sabit. name sürekli değişen bir şey olsun.
// o zaman 1-8 arasına yazar
// o zaman 19-29 arasına name eklicem.
// bunlar birbirinden bağımsız her şey olabilir
// nasıl soracağını mı düşünüyosun evet hfdgh aslında anladım da gibi