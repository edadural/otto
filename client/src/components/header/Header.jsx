

const Header = () => {

    return (

        <div>
            <header className="bg-slate-100 p-5 px-14 flex justify-between items-center">
                <div className="logo flex justify-start">
                    <a href="/">
                        <p className="text-2xl font-bold ">deneme</p>
                    </a>
                </div>
                <div className="menu-links flex justify-center items-center gap-14">
                    <a href="/">
                        <p className="text-lg">home</p>
                    </a>
                    <a href="/deneme">
                        <p className="text-lg">deneme</p>
                    </a>
                    <a href="/">
                        <p className="text-lg">deneme2</p>
                    </a>
                </div>
                <div className="flex justify-end">
                    <a href="/deneme2">
                        <p className="text-lg">login</p>
                    </a>
                </div>
            </header>
        </div>

    )
}

export default Header;
