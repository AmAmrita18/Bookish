import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
const MyFooter = () => {
  return (
    <Footer className='bg-blue-extra-dark'>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" className='text-off-white ' />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='text-off-white '>About</Footer.Link>
              <Footer.Link href="#" className='text-off-white '>Careers</Footer.Link>
              <Footer.Link href="#" className='text-off-white '>Brand Center</Footer.Link>
              <Footer.Link href="#" className='text-off-white '>Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" className='text-off-white hover:text-yellow' />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='text-off-white hover:text-yellow'>Discord Server</Footer.Link>
              <Footer.Link href="#" className='text-off-white hover:text-yellow'>Twitter</Footer.Link>
              <Footer.Link href="#" className='text-off-white hover:text-yellow'>Facebook</Footer.Link>
              <Footer.Link href="#" className='text-off-white hover:text-yellow'>Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" className='text-off-white hover:text-yellow' />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='text-off-white hover:text-yellow'>Privacy Policy</Footer.Link>
              <Footer.Link href="#" className='text-off-white hover:text-yellow'>Licensing</Footer.Link>
              <Footer.Link href="#" className='text-off-white hover:text-yellow'>Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" className='text-off-white hover:text-yellow' />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='text-off-white hover:text-yellow'>iOS</Footer.Link>
              <Footer.Link href="#" className='text-off-white hover:text-yellow'>Android</Footer.Link>
              <Footer.Link href="#" className='text-off-white hover:text-yellow'>Windows</Footer.Link>
              <Footer.Link href="#" className='text-off-white hover:text-yellow'>MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-off-white px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Bookish™" year={2023} className='text-blue-extra-dark hover:text-blue'/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" className='text-blue-extra-dark hover:text-blue' icon={BsFacebook} />
            <Footer.Icon href="#" className='text-blue-extra-dark hover:text-blue' icon={BsInstagram} />
            <Footer.Icon href="#" className='text-blue-extra-dark hover:text-blue' icon={BsTwitter} />
            <Footer.Icon href="#" className='text-blue-extra-dark hover:text-blue' icon={BsGithub} />
            <Footer.Icon href="#" className='text-blue-extra-dark hover:text-blue' icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter