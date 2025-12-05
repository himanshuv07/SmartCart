import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import { HomeIcon, LogIn, LogOut, ShoppingCart } from 'lucide-react'
import ModeToggle from './ModeToggle'
import { stackServerApp } from '@/stack/server'
import { getUserDetails } from '@/actions/user.action'
import { UserButton } from '@stackframe/stack'

async function Navbar() {

    // ✔ stackServerApp.getUser()
    // Checks if user is logged in and returns their info.

    // ✔ stackServerApp.urls
    // Gives you built-in login/logout/signup URLs from Stack Auth.
    const user = await stackServerApp.getUser();
    const app = stackServerApp.urls;

    const userProfile = await getUserDetails(user?.id);

    return (
        <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="max-w-7xl mx-auto px-4">

                <div className="flex justify-between h-16 items-center">

                    {/* Logo and navigation items */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-xl font-bold text-primary font-mono tracking-wider"
                        >SmartCart
                        </Link>
                    </div>

                    {/* Navbar Components */}

                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" className="flex items-center gap-2" asChild>
                            <Link href="/">
                                <HomeIcon className='w-4 h-4' />
                                <span className="hidden lg:inline">Home</span>
                            </Link>
                        </Button>

                        <Button variant="ghost" className="flex items-center gap-2" asChild>
                            <Link href="/products">
                                <ShoppingCart className='w-4 h-4' />
                                <span className="hidden lg:inline">Products</span>
                            </Link>
                        </Button>

                        <ModeToggle />

                        {user ? (<>

                            {/* Sign Out Button */}
                            <Button variant="secondary" className="flex items-center gap-2" asChild>
                                <Link href={app.signOut}>
                                    <LogOut className='w-4 h-4' />
                                    <span className="hidden lg:inline">Sign Out</span>
                                </Link>
                            </Button>

                            <UserButton />


                        </>) : (<>

                            {/* Sign In Button */}
                            <Button variant="ghost" className="flex items-center gap-2" asChild>
                                <Link href={app.signIn}>
                                    <LogIn className='w-4 h-4' />
                                    <span className="hidden lg:inline">Sign In</span>
                                </Link>
                            </Button>

                        </>)}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar