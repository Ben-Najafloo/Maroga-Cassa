"use client"

import { useContext } from 'react';
import { CardContext } from '../contexts/cardContext';
import Link from 'next/link';

export default function Card() {
    const { cart, removeFromCart, updateQuantity, totalPay } = useContext(CardContext)
    return (

        <div class="flex h-full flex-col overflow-y-auto px-54 pt-4 shadow-xl">
            <div class="flex items-start justify-between">
                <h2 id="drawer-title" class="text-lg font-medium text-gray-300 mb-2">Shopping cart</h2>
            </div>
            {!cart ? (
                <div class="mt-8">
                    <div class="flow-root">
                        <div class="-my-6 divide-y divide-gray-200 h-96 pt-3">
                            No item in card
                        </div>
                    </div>
                </div>
            ) : cart.map((c) => (
                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6 border-t border-gray-600">
                    <div class="mt-8">
                        <div class="flow-root">
                            <ul role="list" class="-my-6 divide-y divide-gray-200">
                                <li class="flex py-6">
                                    <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img src={c.image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="size-full object-cover" />
                                    </div>

                                    <div class="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div class="flex justify-between text-base font-medium text-gray-300">
                                                <h3>
                                                    <Link href={`${c.id}`}>{c.title}</Link>
                                                </h3>
                                                <p class="ml-4">{c.price}</p>
                                            </div>
                                            <p class="mt-1 text-sm text-gray-400">{c.category}</p>
                                        </div>
                                        <div class="flex flex-1 items-end justify-between text-sm">
                                            <div>
                                                <p class="text-gray-400">Quantity: </p>
                                                <input
                                                    onChange={(e) => { updateQuantity(c.id, event.target.value) }}
                                                    type='number'
                                                    value={c.quantity}
                                                    min="1"
                                                    className='w-24 pl-3' />
                                            </div>
                                            <div class="flex">
                                                <button
                                                    onClick={() => { removeFromCart(c.id) }}
                                                    class="font-medium text-red-600 hover:text-red-500">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))

            }


            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div class="flex justify-between text-base font-medium text-gray-300">
                    <p>Total payment</p>
                    <p>${totalPay().toFixed(2)}</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-400">Shipping and taxes calculated at checkout.</p>
                <div class="flex w-full mt-6">
                    <div class="w-2/3 mr-3">
                        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700">
                            Checkout
                        </a>
                    </div>
                    <Link href='/' class="cursor-pointer flex justify-center text-center text-sm text-gray-400 pt-2">
                        <p>
                            or &nbsp;
                            <button type="button" command="close" commandfor="drawer" class="font-medium text-indigo-600 hover:text-indigo-500">
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                            </button>
                        </p>
                    </Link>
                </div>
            </div>
        </div>

    )
}