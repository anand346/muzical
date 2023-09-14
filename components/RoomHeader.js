function RoomHeader(){

    return (

        <>
            
            <nav className="bg-muzical_secondary_low border-muzical_secondary_low h-[80px]  ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 pb-4">
                    <a href={`${process.env.NEXT_PUBLIC_API_ROOT}`} className="flex items-center">
                        <img src={`${process.env.NEXT_PUBLIC_API_ROOT}/images/logo.png`} className="h-12" alt="Muzical Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto relative z-10" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg bg-muzical_secondary_low md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                            <li>
                                <a href="https://github.com/anand346/muzical" className="block hover:text-muzical_primary py-2 pl-3 pr-4 text-muzical_grey rounded  md:border-0  md:p-0"><i className = "fa fa-github text-[24px]"></i></a>
                            </li>
                            <li>
                                <a href={`${process.env.NEXT_PUBLIC_API_ROOT}/channels`} className="block hover:text-muzical_primary py-2 pl-3 pr-4 text-muzical_grey rounded  md:border-0  md:p-0"><i className = "fa fa-home text-[24px]"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default RoomHeader;