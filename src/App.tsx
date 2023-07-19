import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div style={{
      background: 'linear-gradient(to right, #00031d, #000536)',
      width: '100%',
      height: '100vh',
      zIndex: 4,
      position: 'absolute'
    }}>
      <Navbar />
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-col gap-y-5'>
          <h1 className="text-4xl text-justify font-bold text-white bigText">
            Discover. Connect. Collaborate.
          </h1>
          <h2 className="text-xl font-light text-white smallText">An ecosystem for Social media influencers and Brands</h2>
          <div className='flex flex-row items-center justify-between buttonContainer'>
            <button type="button" className='uppercase bg-green-400 px-7 py-3 border border-transparent rounded-lg overflow-hidden hover:cursor-pointer'>
              <p className='text-black'>I'm an influencer</p>
            </button>
            <button type="button"
              className='uppercase bg-green-400 px-7 py-3 border border-transparent rounded-lg overflow-hidden hover:cursor-pointer'>
              <p className='text-black'>I'm a brand</p>
            </button>
          </div>
        </div>
        <div className='fadeImage'>
          <img src="internStock.png" alt="internStock" className="w-[540] h-[384]" />
        </div>
      </div>
      <div className='w-fit overflow-hidden'>
        <div className="waveWrapperInner waveAnimation bgTop">
          <div className="wave waveTop" style={{
            backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')"
          }}></div>
        </div>
        <div className="waveWrapperInner waveAnimation bgMiddle">
          <div className="wave waveMiddle" style={{
            backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"
          }}></div>
        </div>
        <div className="waveWrapperInner waveAnimation bgBottom">
          <div className="wave waveBottom" style={{
            backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"
          }}></div>
        </div>
      </div>
    </div>
  )
}
export default App
