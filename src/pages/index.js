
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  const [page2, setpage2] = useState(false)

  return (
    <div>
      <div className='main-container flex'>

      <div className='left-container'>
        <Image src={'/tif-1-bus.png'} width='83' height='107' className='bus-img'></Image>
        <div className='head'>Discover the <br /><div className='flex'><div className='best mr-4'>Best</div><div>Food</div> </div>and Drinks</div>
        <div className='desccont'><div className='desc'>Naturally made Healthcare Products for the <br />better care & support of your body.</div></div>
        <button className='explore-btn'>Explore Now!</button>
      </div>

      <div className='right-container'>
        <div className='relative'>
          <Image src='/wave.svg' alt='wave' width='752' height='763' />
        </div>
        <div><button className='touch-btn'>Get In Touch</button></div>
      </div>

      </div>
      
      <div className='page2'>
        <div className='flex'>
          <Image src={'/about.jpg'} width='384' height='468' className='about-img'/>
          <div className='about'>
            <div className='about-us'>About Us</div>
            <div className='about-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</div>
            <div className='rbtn-cont'><button className='read-btn'>Read More</button></div>
          </div>
        </div>
      </div>

      <div>
        <div className='articles'>
          <div className='head-latest'>Latest Articles</div>
          <div className='md:flex'>
            { page2? 
              <><div className='card'>
                <Image src={'/article-4.png'} width='326' height='257' className='article-img' />
                <div className='headings'>How To Grill Corn</div>
                <div className='descriptions'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
                <button className='article-btns'>Read More</button>
              </div><div className='card ml-12'>
                <Image src={'/article-5.png'} width='326' height='257' className='article-img' />
                <div className='headings'>Crunchwrap Supreme</div>
                <div className='descriptions'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
                <button className='article-btns'>Read More</button>
              </div><div className='card ml-12'>
                <Image src={'/article-6.png'} width='326' height='257' className='article-img' />
                <div className='headings'>Broccoli Cheese Soup</div>
                <div className='descriptions'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
                <button className='article-btns'>Read More</button>
              </div></>
              :
              <><div className='card'>
                <Image src={'/article-1.png'} width='326' height='257' className='article-img' />
                <div className='headings'>Grilled  Tomatoes at Home</div>
                <div className='descriptions'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
                <button className='article-btns'>Read More</button>
              </div><div className='card ml-12'>
                  <Image src={'/article-2.png'} width='326' height='257' className='article-img' />
                  <div className='headings'>Snacks for Travel</div>
                  <div className='descriptions'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
                  <button className='article-btns'>Read More</button>
                </div><div className='card ml-12'>
                  <Image src={'/article-3.png'} width='326' height='257' className='article-img' />
                  <div className='headings'>Post-workout Recipes</div>
                  <div className='descriptions'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
                  <button className='article-btns'>Read More</button>
                </div></> 
              }
          </div>
        </div>
      </div>
          
      <div className='flex justify-center arrows'>
        {page2 ? <div onClick={()=>{setpage2(!page2)}}>
          <Image src={'/box.png'} width='16' height='16' className='box'/>
          <Image src={'/arrow-left2.png'} width='5' height='8' className='-mt-3 ml-1'/>
        </div> :
        <div>
          <Image src={'/box.png'} width='16' height='16' className='box'/>
          <Image src={'/arrow-left.png'} width='5' height='8' className='-mt-3 ml-1'/>
        </div>}
        <div className='-mt-1 mx-2'>{page2?2:1}/2</div>
        {page2 ?
          <div>
            <Image src={'/box.png'} width='16' height='16' className='box'/>
            <Image src={'/arrow-right2.png'} width='5' height='8' className='-mt-3 ml-1'/>
          </div> :
          <div onClick={()=>{setpage2(true)}}>
            <Image src={'/box.png'} width='16' height='16' className='box'/>
            <Image src={'/arrow-right.png'} width='5' height='8' className='-mt-3 ml-1'/>
          </div>
        }
      </div>

      <div className='footer md:flex'>
        <div><Image src={'/tif-1-bus.png'} height='125' width='161' className='footer-img'/></div>
        <div className='contact-us'>
          <div className='contact'>Contact Us</div>
          <div className='address'>Lorem Ipsum Pvt Ltd.5/1, Magalton <br/>Road, Phartosh Gate near YTM<br/> Market, XYZ-343434</div>
          <div className='address'>example2020@gmail.com</div>
          <div className='address'>(904) 443-0343</div>
        </div>
        <div className='morecont'>
          <div className='more'>More</div>
          <div className='address'>About Us</div>
          <div className='address'>Products</div>
          <div className='address'>Career</div>
          <div className='address'>Contact Us</div>
        </div>
        <div className='social'>
          <div className='social-head'>Social Links</div>
          <div className='flex'>
            <Image src={'/insta.png'} width='21' height='21' className='mt-2'/>
            <Image src={'/twitter.png'} width='21' height='17' className='mt-2 ml-9'/>
            <Image src={'/facebook.png'} width='11' height='21' className='mt-2 ml-9'/>
          </div>
          <div className='copy'>© 2022 Food Truck Example</div>
        </div>
      </div>
        
    </div>
    
  )
}
