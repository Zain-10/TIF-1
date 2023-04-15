
import Image from 'next/image'

export default function Home() {

  let page2 = false

  const changePage=()=>{
    let page2 = true
    console.log(page2)
  }

  return (
    <div>
      <div className='main-container flex'>

      <div className='left-container'>
        <Image src={'/tif-1-bus.png'} width='83' height='107' className='bus-img'></Image>
        <div className='head'>Discover the <br /><div className='flex'><div className='best mr-4'>Best</div><div>Food</div> </div>and Drinks</div>
        <div className='desc'>Naturally made Healthcare Products for the <br />better care & support of your body.</div>
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
          <div>
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
              <div id='div1'>
              <div className='card'>
                <Image src={'/article-1.png'} width='326' height='257' className='article-img' />
                <div className='headings'>Grilled  Tomatoes at Home</div>
                <div className='descriptions'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
                <button className='article-btns'>Read More</button>
              </div>
              <div className='card ml-12'>
                  <Image src={'/article-2.png'} width='326' height='257' className='article-img' />
                  <div className='headings'>Snacks for Travel</div>
                  <div className='descriptions'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
                  <button className='article-btns'>Read More</button>
              </div>
              <div className='card ml-12'>
                  <Image src={'/article-3.png'} width='326' height='257' className='article-img' />
                  <div className='headings'>Post-workout Recipes</div>
                  <div className='descriptions'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
                  <button className='article-btns'>Read More</button>
              </div>
              </div>
              <div id='div2'>
                <div className='card ml-12'>
                <Image src={'/article-3.png'} width='326' height='257' className='article-img' />
                <div className='headings'>Post-workout Recipes</div>
                <div className='descriptions'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
                <button className='article-btns'>Read More</button>
              </div><div className='card ml-12'>
                  <Image src={'/article-3.png'} width='326' height='257' className='article-img' />
                  <div className='headings'>Post-workout Recipes</div>
                  <div className='descriptions'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
                  <button className='article-btns'>Read More</button>
                </div><div className='card ml-12'>
                  <Image src={'/article-3.png'} width='326' height='257' className='article-img' />
                  <div className='headings'>Post-workout Recipes</div>
                  <div className='descriptions'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
                  <button className='article-btns'>Read More</button>
                </div>
                </div>
            
          </div>
        </div>
      </div>
          
      <div className='flex justify-center arrows'>
        <div>
          <Image src={'/box.png'} width='16' height='16' className='box'/>
          <Image src={'/arrow-left.png'} width='5' height='8' className='-mt-3 ml-1'/>
        </div>
        <div className='-mt-1 mx-2'>1/2</div>
        <div onClick={changePage()} id='btn'>
          <Image src={'/box.png'} width='16' height='16' className='box'/>
          <Image src={'/arrow-right.png'} width='5' height='8' className='-mt-3 ml-1'/>
        </div>
      </div>

    </div>
    
  )
}
