"use client"

import { CardContext } from '@/app/contexts/cardContext';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { useContext } from 'react';
import { SlBasket } from "react-icons/sl";
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {

    const { data: session } = useSession()
    const [isrender, setIsRender] = useState(false)
    useEffect(
        () => setIsRender(true)
        , [])

    if (!isrender) {
        return null
    }

    const { totalQuantity } = useContext(CardContext);
    return (
        <div>
            <header className="bg-indigo-500">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5">
                            <span className="sr-only">Your Company</span>
                            <img src="https://behnam.tech/wp-content/uploads/2025/03/output-onlinepngtools.png" alt="" className="h-11 w-auto" />
                        </Link>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12">
                        <a href="/" className="text-sm/6 font-semibold text-white">Features</a>
                        <a href="/" className="text-sm/6 font-semibold text-white">Marketplace</a>
                        <a href="/" className="text-sm/6 font-semibold text-white">Company</a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {session ? (
                            <>
                                <div className="text-sm/6 font-semibold text-white">
                                    Hi {session.user.name}
                                </div>
                                <button onClick={() => { signOut() }} className='ml-3 cursor-pointer hover:font-bold'>Sign Out</button>
                            </>
                        ) : (
                            <button onClick={() => { signIn() }} className='cursor-pointer hover:font-bold'>Sign In</button>
                        )}


                        <Link href="/card" className="flex text-sm/6 font-semibold text-white ml-11">
                            <SlBasket size="20" />
                            <span className='text-red-500 font-bold ml-1 text-xl'>{totalQuantity()}</span>
                        </Link>

                    </div>

                </nav>

            </header>

        </div>
    )
}

export default Header
