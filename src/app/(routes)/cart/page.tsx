'use client'

import { useEffect, useState } from 'react'

import Container from '@/components/ui/container'
import useCart from '@/hooks/use-cart'

import Summary from './components/summary'
import CartItem from './components/cart-item'
import FromUser from './components/form-user'
import axios from 'axios'

export const revalidate = 0

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false)
  const items = useCart(state => state.items)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const onCheckout = async (data: any) => {
    console.log('click')
    console.log(data)
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map(item => item.id),
        phone: data.phone,
        address: data.address
      }
    )
    window.location = response.data.url
  }

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-16 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-black'>{'Shopping Cart'}</h1>
          <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
            <div className='lg:col-span-5'>
              <FromUser onSubmit={onCheckout} disabled={items.length === 0} />
            </div>
            <Summary onSubmit={onCheckout} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CartPage
