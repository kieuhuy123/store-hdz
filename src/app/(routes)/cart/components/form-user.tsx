import Button from '@/components/ui/button'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  phone: number
  address: string
}

const FromUser = ({
  onSubmit,
  disabled
}: {
  onSubmit: SubmitHandler<Inputs>
  disabled: boolean
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()

  return (
    <form className='w-full max-w-lg' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full  px-3 mb-6 md:mb-0'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
            {'Name'}
          </label>
          <input
            {...register('name', { required: true })}
            className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            placeholder='Type phon'
          ></input>
          {errors.name?.type === 'required' && (
            <span className='text-red-500 text-sm' role='alert'>
              {'Name is required'}
            </span>
          )}
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full  px-3 mb-6 md:mb-0'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
            {'Phone'}
          </label>
          <input
            {...register('phone', { required: true })}
            className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            placeholder='Type phone'
          ></input>
          {errors.phone?.type === 'required' && (
            <span className='text-red-500 text-sm' role='alert'>
              {'Phone is required'}
            </span>
          )}
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full  px-3 mb-6 md:mb-0'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
            {'Address'}
          </label>
          <input
            {...register('address', { required: true })}
            className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            placeholder='Type Address'
          ></input>
          {errors.address?.type === 'required' && (
            <span className='text-red-500 text-sm' role='alert'>
              {'Address is required'}
            </span>
          )}
        </div>
      </div>
      <Button type='submit' className='w-full mt-6' disabled={disabled}>
        {'Checkout'}
      </Button>
    </form>
  )
}

export default FromUser
