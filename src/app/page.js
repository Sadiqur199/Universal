import About from '@/Component/About/About'
import Banner from '@/Component/Banner/Banner'
import Category from '@/Component/ProductCategory/Category'


export default function Home() {
  return (
    <main className="">
      <div>
        <Banner></Banner>
        <Category></Category> 
        <About></About> 
      </div>
    </main>
  )
}
