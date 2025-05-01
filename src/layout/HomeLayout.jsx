import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Hilight from '../Components/Hilight';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/homeLayout/LeftAside';
import RightAside from '../Components/homeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header className=''>
                <Header></Header>
                <section className='w-11/12 mx-auto m-4'>
       <Hilight></Hilight>
                </section>
                <nav className='w-11/12 mx-auto m-4'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                   <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;