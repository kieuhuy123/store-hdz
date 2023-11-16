import { Youtube } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Facebook } from 'lucide-react'
import { Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Container from './ui/container'

const Footer = () => {
  return (
    <footer className='bg-black  border-t'>
      <Container>
        <div className='px-10 pt-10'>
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-12 lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-6'>
              <div>
                <h2 className='mb-6 text-sm font-semibold uppercase text-white'>
                  {'Company'}
                </h2>
                <ul className='text-gray-500 font-medium'>
                  <li className='mb-4'>
                    <a href='#' className=' hover:text-white'>
                      {'About'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:text-white'>
                      {'Careers'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:text-white'>
                      {'Brand Center'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:text-white'>
                      {'Blog'}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold uppercase text-white'>
                  {'Legal'}
                </h2>
                <ul className='text-gray-500 font-medium'>
                  <li className='mb-4'>
                    <a href='#' className=' hover:text-white'>
                      {'Claim'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:text-white'>
                      {'Privacy'}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold uppercase text-white'>
                  {'Help center'}
                </h2>
                <ul className='text-gray-500 font-medium'>
                  <li className='mb-4'>
                    <a href='#' className=' hover:text-white'>
                      {'Support'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:text-white'>
                      {'Pricing'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:text-white'>
                      {'Documentation'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:text-white'>
                      {'Guides'}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold uppercase text-white'>
                  {'Solutions'}
                </h2>
                <ul className='text-gray-500 font-medium'>
                  <li className='mb-4'>
                    <a href='#' className=' hover:text-white'>
                      {'Marketing'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:text-white'>
                      {'Analytics'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:text-white'>
                      {'Insights'}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-span-12 lg:col-span-4'>
              <ul className='list-none flex space-x-4 items-center justify-center'>
                <li>
                  <Link href={'https://www.instagram.com/'}>
                    <Instagram size={30} color='white' />
                  </Link>
                </li>
                <li>
                  <Link href={'https://www.facebook.com/'}>
                    <Facebook size={30} color='white' />
                  </Link>
                </li>
                <li>
                  <Link href={'https://twitter.com/?lang=vi'}>
                    <Twitter size={30} color='white' />
                  </Link>
                </li>
                <li className=''>
                  <Link href={'https://www.youtube.com/'}>
                    <Youtube size={30} color='white' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='mx-auto py-10'>
            <p className='text-center text-xs text-black'>
              &copy; 2023 Store, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
