
import { Carousel, Typography, Button, Navbar } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
  {
    title: "Resources",
    links: ["We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.", "Our products are designed for small to medium size companies willing to optimize their performance."],
  },
  {
    title: "İletişim",
    links: ["info@ottonom.com", "+90 224 443 11 16"],
  },
];

const BIRIM = [
  {
    title: "Üretim Teknolojileri",
    links: ["Ottonom Production Technologies, Havacılıktan otomotive, beyaz eşyadan savunma sanayine kadar birçok sektöre özel makine, özel test sistemleri ve takım tasarımı&imalatı konusunda  çözüm sağlar"],
  },
  {
    title: "Design Center",
    links: ["Ottonom Desing Center, başta otomotiv ve beyaz eşya olmak üzere plastik parça, saç parça ve mekanizma tasarımlarını tasarlar."],
  },
  {
    title: "Araştırma Takımı",
    links: ["İnovatif ürün ve çözümlerine yönelik  yarının teknolojilerini  bugünden geliştirmek üzere yaptığı araştırma ve geliştirme faaliyetleri  ile  geleceğe dokunan öncü çalışmalar sunar"],
  },
  {
    title: "DETAIL Çevresel Test Teknolojisi",
    links: ["DETAIL İLE birden çok çevresel  koşul oluşturabiliyor, test edebiliyor, alınan sonuçlarla firmalar ürünlerinin; verimliliğini, dayanıklılığını, sınır noktalarını ve tepkilerini analiz ederek üretim kararlarını güvenle alıp hareket edebiliyorlar."],
  },
];

const currentYear = new Date().getFullYear();

const HomePage = () => {

  return (
    <div>
      <div className="flex items-center justify-between text-blue-gray-900 px-36 pt-5 pb-2">
        <img className="h-9" src="/img/ottonom.png" />
        <div className="flex items-center gap-4">
          <Link to="/sign-up">
            <Button
              variant="gradient"
              className="hidden lg:inline-block"
              size="lg"
            >
              <span>Kayıt ol</span>
            </Button>
          </Link>
          <Link to="/sign-in">
            <Button
              variant="gradient"
              className="hidden lg:inline-block"
              size="lg"
            >
              <span>Giriş Yap</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="h-auto mx-28 my-5">
        <Carousel className="rounded-3xl">
          <div className="relative h-full w-full">
            <img
              src="/img/otto.png"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  className="mb-4 text-3xl text-orange-800"
                >
                  Ottonom, Dinamik Mühendislik ile Fikirleri Gerçeğe Dönüştürür
                </Typography>
                <Typography
                  color="white"
                  className="text-lg opacity-80"
                >
                  Büyük bir mühendislik ekibi olarak, en iyi çözümleri sunmak için farklı mühendislik disiplinlerini biraya getirerek farklı sektörlerin çeşitli ihtiyaçlarına yönelik; projelendirme, tasarım, imalat ve satış sonrası servisleri ‘Dinamik Mühendislik’ modelimiz ile sunarak fikirleri gerçeğe dönüştürüyor, müşterilerimize  katma değerli yüksek mühendislik çözümleri sunuyoruz.
                </Typography>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="/img/otto.png"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl text-orange-800"
                >
                  Ottonom Mühendislik Servisleri
                </Typography>
                <Typography
                  color="white"
                  className="text-lg opacity-80"
                >
                  Ottonom mühendislik hizmet ve çözüm sağlayıcısı olarak; dinamik mühendislik modeli ile yeni nesil yüksek teknolojili ürün ve çözümler sunar. Ottonom’un sunduğu mühendislik hizmetleri
                
                  <p className="font-bold">Özel Makine Tasarımı, Kısmi veya Komple Makine İmalatı, Elektrik Planı Tasarımı, PLC Programlama, Devreye Alma, GUI Tasarım, Problem Çözme Hizmetleri, Proje Yönetimi, Kalite Kontrol Hizmetleri</p>
                </Typography>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="/img/otto.png"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl text-orange-800"
                >
                  Fayda Odaklı Mühendislik
                </Typography>
                <Typography
                  color="white"
                  className="text-lg opacity-80"
                >
                  Müşterilerimizin inovatif çözümlerle rekabet güçlerini arttırmak için sunduğumuz
                  tüm mühendislik çözümlerin arkasında 5 temel faydaya odaklanıyoruz. 
                  <p className="font-bold">Risklerin En Aza İndirilmesi, Zaman Tasarrufu, Verimliliğin Optimize Edilmesi, Maliyet Tasarrufu, İş Güvenliğinin Maksimize Edilmesi</p>
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="p-5 mx-24">
        <div className="flex justify-center">
          <Typography
            className="font-bold text-4xl text-gray-700"
          >
            İŞ BİRİMLERİMİZ
          </Typography>
        </div>
        <div className="mx-auto grid w-full grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 ">
          {BIRIM.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                className="mb-3 font-bold uppercase opacity-50 flex justify-center text-gray-900"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography key={key} as="li" color="blue-gray" className="font-normal">
                    <a
                      href=""
                      className="inline-block py-1 pr-2 transition-transform text-base"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <footer className="relative w-full bg-blue-gray-800 text-white">
        <div className="mx-auto w-full">
          <div className="mx-auto grid w-full grid-cols-1 gap-14 py-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl px-8">
            {SITEMAP.map(({ title, links }, key) => (
              <div key={key} className="w-full">
                <Typography
                  className="mb-4 font-bold uppercase opacity-50 text-base"
                >
                  {title}
                </Typography>
                <ul className="space-y-1">
                  {links.map((link, key) => (
                    <Typography key={key} as="li" className="font-normal">
                      <a
                        href=""
                        className="inline-block py-1 pr-2 transition-transform text-sm"
                      >
                        {link}
                      </a>
                    </Typography>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 px-44 py-5 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal md:mb-0"
            >
              &copy; {currentYear} <a href="https://material-tailwind.com/">Ottonom</a>. Tüm Hakkı Saklıdır.
            </Typography>
            <div className="flex gap-4 sm:justify-center">
              <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Typography>
              <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Typography>
              <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Typography>
              <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
