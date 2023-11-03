'use client'

import axios from 'axios'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import Button from '@/components/ui/button'
import Currency from '@/components/ui/currency'
import useCart from '@/hooks/use-cart'
import { toast } from 'react-hot-toast'
import CartItem from './cart-item'
import CartItemInfo from './cart-item-info'
import { SubmitHandler } from 'react-hook-form'
type Inputs = {
  name: string
  phone: number
  address: string
}

const Summary = ({ onSubmit }: { onSubmit: SubmitHandler<Inputs> }) => {
  const searchParams = useSearchParams()
  const items = useCart(state => state.items)
  const removeAll = useCart(state => state.removeAll)

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.')
      removeAll()
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.')
    }
  }, [searchParams, removeAll])

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  return (
    <div className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-7 lg:mt-0 lg:p-8'>
      {items.length === 0 && (
        <p className='text-neutral-500'>{'No items added to cart.'}</p>
      )}
      <ul>
        {items.map(item => (
          <CartItem key={item.id} data={item} />
        ))}
      </ul>

      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between  pt-4'>
          <h2 className='text-lg font-medium text-gray-900'>{'Order total'}</h2>
          <Currency value={totalPrice} />
        </div>
      </div>
    </div>
  )
}

export default Summary
