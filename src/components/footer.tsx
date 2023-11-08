import { Youtube } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Facebook } from 'lucide-react'
import { Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Container from './ui/container'

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
      <Container>
        <div className='px-10 pt-10'>
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-12 lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-6'>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                  {'Company'}
                </h2>
                <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                  <li className='mb-4'>
                    <a href='#' className=' hover:underline'>
                      {'About'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:underline'>
                      {'Careers'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:underline'>
                      {'Brand Center'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:underline'>
                      {'Blog'}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                  {'Legal'}
                </h2>
                <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                  <li className='mb-4'>
                    <a href='#' className=' hover:underline'>
                      {'Claim'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:underline'>
                      {'Privacy'}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                  {'Help center'}
                </h2>
                <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                  <li className='mb-4'>
                    <a href='#' className=' hover:underline'>
                      {'Support'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:underline'>
                      {'Pricing'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:underline'>
                      {'Documentation'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:underline'>
                      {'Guides'}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                  {'Solutions'}
                </h2>
                <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                  <li className='mb-4'>
                    <a href='#' className=' hover:underline'>
                      {'Marketing'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:underline'>
                      {'Analytics'}
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='#' className='hover:underline'>
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
                    <Instagram size={30} />
                  </Link>
                </li>
                <li>
                  <Link href={'https://www.facebook.com/'}>
                    <Facebook size={30} />
                  </Link>
                </li>
                <li>
                  <Link href={'https://twitter.com/?lang=vi'}>
                    <Twitter size={30} />
                  </Link>
                </li>
                <li className=''>
                  <Link href={'https://www.youtube.com/'}>
                    <Youtube size={30} />
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
