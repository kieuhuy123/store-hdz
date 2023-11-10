import getBillboards from '@/actions/get-billboards'
import getProducts from '@/actions/get-products'
import Collection from '@/components/collection'
import HomeBanner from '@/components/home-banner'
import ProductList from '@/components/product-list'
import Sponsor from '@/components/sponsor'
import Billboard from '@/components/ui/billboard'
import Container from '@/components/ui/container'
import NoResults from '@/components/ui/no-results'

export const revalidate = 0

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboards({ onHomepage: true })

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        {billboard.length === 1 ? (
          billboard.map(item => <Billboard key={item.id} data={item} />)
        ) : (
          <HomeBanner data={billboard} />
        )}
      </div>
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 pb-10'>
        <ProductList title='Featured Products' items={products} />
      </div>
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 pb-10'>
        <Collection />
      </div>
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 pb-10'>
        <Sponsor />
      </div>
    </Container>
  )
}

export default HomePage
