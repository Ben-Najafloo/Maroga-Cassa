'use client'; // if you're using Next.js App Router

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Nav = () => {
  type MenuProps = {
    href: string;
    title: string;
  };

  const Menu: React.FC<MenuProps> = ({ href, title }) => {
    return (
      <motion.li
        whileHover={{ scale: 1.1, color: '#facc15' }}
        className="text-white cursor-pointer text-lg"
      >
        <Link href={href}>{title}</Link>
      </motion.li>
    );
  };
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-white text-xl font-bold"
        >
          <img src="images/logo/V.png" className="size-12 rounded-full" />
        </motion.div>

        <ul className="flex space-x-8">
          <Menu title="Home" href="/" />
          <Menu title="Products" href="/products" />
        </ul>
      </div>
    </motion.nav>
  );
};

export default Nav;
