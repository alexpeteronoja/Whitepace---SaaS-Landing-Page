import './App.css';
import Button from './components/button';
import Navbar from './components/Navbar';
import PayCard from './components/PayCard';
import Testimonial from './components/Testimonials';

function App() {
  return (
    <>
      <div>
        <Navbar />

        <div className="bg-[#043873] grid lg:grid-cols-2 gap-x-3 gap-y-25 py-20 md:py-35 px-7 xl:px-30 bg-[url(images/BackgroundElement.webp)] bg-no-repeat">
          <div className="text-white flex flex-col justify-center items-center lg:items-start text-center lg:text-start">
            <p className="font-bold text-4xl md:text-5xl lg:text-6xl ">
              Get More Done with whitepace
            </p>
            <p className="mt-6 mb-15">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>

            <Button btnText="Try Whitepace free" btnBgColor="bg-[#4F9CF9]" />
          </div>

          <div>
            <img src="images\AnalyzeData.webp" alt="" className="w-full" />
          </div>
        </div>

        {/* Project Management Section */}

        <div className="grid lg:grid-cols-2 gap-x-15 gap-y-15 lg:gap-y-25 py-20 md:py-25 lg:py-35  px-7 xl:px-30 project-bg-img ">
          <div className="order-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-start ">
            <p className="font-bold text-4xl md:text-5xl lg:text-7xl">
              Project Management
            </p>
            <p className="mt-6 mb-15">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            <Button
              btnText="Get Started"
              btnBgColor="bg-[#4F9CF9]"
              btnTextColor="text-white"
            />
          </div>

          <div className="order-2">
            <img src="images/CodingAWebsite.webp" alt="" className="w-full" />
          </div>

          <div className="order-4 lg:order-3">
            <img
              src="images/Work Together Image.png"
              alt=""
              className="w-full"
            />
          </div>

          <div className="order-3 lg:order-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-start">
            <p className="font-bold text-4xl md:text-5xl lg:text-7xl">
              Work together
            </p>
            <p className="mt-6 mb-15">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <Button
              btnText="Try it now"
              btnBgColor="bg-[#4F9CF9]"
              btnTextColor="text-white"
            />
          </div>
        </div>

        {/* Use Extension Section */}

        <div className="bg-[#043873] grid lg:grid-cols-2 gap-x-3 gap-y-25 py-20 md:py-25 lg:py-35 px-7 xl:px-30 ">
          <div className="text-white flex flex-col justify-center items-center lg:items-start text-center lg:text-start">
            <p className="font-bold text-6xl ">Use as Extension</p>
            <p className="mt-6 mb-15">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>

            <Button btnText="Let’s Go" btnBgColor="bg-[#4F9CF9]" />
          </div>

          <div>
            <img
              src="images/ContentMediaFolder2.webp"
              alt=""
              className="w-full"
            />
          </div>
        </div>

        {/* Customise Your need Section */}
        <div className="grid lg:grid-cols-2 gap-x-15 gap-y-15 lg:gap-y-25 py-25 md:py-35 px-7 xl:px-30">
          <div className="">
            <img src="images/Wireframe2.webp" alt="" className="w-full" />
          </div>

          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start ">
            <p className="font-bold text-4xl md:text-5xl lg:text-7xl">
              Customise it to your needs
            </p>
            <p className="mt-6 mb-15">
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </p>
            <Button
              btnText="Let's Go"
              btnBgColor="bg-[#4F9CF9]"
              btnTextColor="text-white"
            />
          </div>
        </div>

        {/* Plan Section */}
        <div className="py-25 md:py-35">
          <div className="px-7 xl:px-30 text-center">
            <p className="font-bold text-4xl md:text-5xl lg:text-7xl mb-6">
              Choose Your Plan
            </p>
            <p>
              Whether you want to get organized, keep your personal life on
              track, or boost workplace productivity, Evernote has the right
              plan for you.
            </p>

            {/* Subcription Section */}
            <div className="px-7 xl:px-30 mt-15">
              <PayCard />
            </div>
          </div>
        </div>

        {/* Work EveryWhere Section */}

        <div className="bg-[#043873] py-25 md:py-35 px-7 xl:px-30 text-white text-center">
          <p className="font-bold text-4xl md:text-5xl lg:text-7xl ">
            Your work, everywhere you are
          </p>
          <p className="mt-6 mb-15">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
          <div className="flex justify-center">
            <Button
              btnText="Try Taskey"
              btnBgColor="bg-[#4F9CF9]"
              btnTextColor="text-white"
            />
          </div>
        </div>

        {/* Data */}

        <div className="grid lg:grid-cols-2 gap-x-15 gap-y-15 lg:gap-y-25 py-25 md:py-35 px-7 xl:px-30">
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start ">
            <p className="font-bold text-4xl md:text-5xl lg:text-7xl">
              100% your data
            </p>
            <p className="mt-6 mb-15">
              The app is open source and your notes are saved to an open format,
              so you'll always have access to them. Uses End-To-End Encryption
              (E2EE) to secure your notes and ensure no-one but yourself can
              access them.
            </p>
            <Button
              btnText="Read More"
              btnBgColor="bg-[#4F9CF9]"
              btnTextColor="text-white"
            />
          </div>

          <div className="">
            <img src="images/Element.png" alt="" className="w-full" />
          </div>
        </div>
      </div>

      {/* Sponsor  */}

      <div className="py-25 md:py-35 px-7 xl:px-30 text-center">
        <p className="font-bold text-4xl md:text-5xl lg:text-7xl mb-25">
          Our sponsors
        </p>

        <div className="flex flex-col lg:flex-row gap-y-25 items-center lg:justify-between">
          <div>
            <img src="images/Apple.png" alt="" className="w-fit" />
          </div>
          <div>
            <img src="images/Microsoft.png" alt="" className="w-fit" />
          </div>
          <div>
            <img src="images/Slack.png" alt="" />
          </div>
          <div>
            <img src="images/Google.png" alt="" />
          </div>
        </div>
      </div>

      {/* Work with your favourite app */}

      <div className="bg-[#043873] grid lg:grid-cols-2 gap-x-25 gap-y-25 py-20 md:py-25 lg:py-35 px-7 xl:px-30 bg-[url(images/BackgroundElement.webp)] bg-no-repeat">
        <div>
          <img src="images/Apps.png" alt="" className="w-full" />
        </div>

        <div className="text-white flex flex-col justify-center items-center lg:items-start text-center lg:text-start">
          <p className="font-bold text-4xl md:text-5xl lg:text-7xl">
            Work with Your Favorite Apps Using whitepace
          </p>
          <p className="mt-6 mb-15">
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </p>

          <Button btnText="Read More" btnBgColor="bg-[#4F9CF9]" />
        </div>
      </div>

      {/* Testimonial Section */}

      <div className="py-20 md:py-25 lg:py-35 px-7 xl:px-30">
        <p className="font-bold text-4xl md:text-5xl lg:text-7xl text-center">
          What Our Clients Says
        </p>

        <div className="my-15">
          <Testimonial />
        </div>
      </div>

      {/* Ending Part */}
      <div className="py-20 md:py-25 lg:py-35 px-7 xl:px-30 bg-[#043873] text-white text-center">
        <p className="font-bold text-4xl md:text-5xl lg:text-7xl mb-6">
          Try Whitepace today
        </p>
        <p>Get started for free. Add your whole team as your needs grow.</p>
        <div className="my-10 flex justify-center">
          <Button btnText="Try Taskey free" btnBgColor="bg-[#4F9CF9]" />
        </div>

        <p>On a big team? Contact sales</p>

        <div className="mt-10 flex justify-center gap-x-10">
          <img src="images/apple-black-logo 2.png" alt="" />
          <img src="images/windows-logo 1.png" alt="" srcset="" />
          <img src="images/android-logo 1.png" alt="" />
        </div>
      </div>

      {/* Footer */}
      <div className="pb-8 px-7 xl:px-30 bg-[#043873] text-white text-center md:text-start">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          <div>
            <div className="text-[28px] font-bold flex items-center justify-center md:justify-start space-x-2.5 mb-3.5">
              <img src="Logo Icon.png" alt="" className="w-9 h-7" />
              <a href="">whitepace</a>
            </div>
            <p>
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>

          <div className="text-base">
            <p className="font-bold text-lg mb-3.5">Product</p>
            <p className="mb-3.5">Overview</p>
            <p className="mb-3.5">Pricing</p>
            <p className="mb-3.5">Customer stories</p>
          </div>

          <div className="text-base">
            <p className="font-bold text-lg mb-3.5">Resources</p>
            <p className="mb-3.5">Blog</p>
            <p className="mb-3.5">Guides & tutorials</p>
            <p className="mb-3.5">Help center</p>
          </div>

          <div className="text-base">
            <p className="font-bold text-lg mb-3.5">Company</p>
            <p className="mb-3.5">About us</p>
            <p className="mb-3.5">Careers</p>
            <p className="mb-3.5">Media kit</p>
          </div>

          <div>
            <p className="font-bold text-2xl">Try It Today</p>
            <p className="my-6 text-base">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button btnText="Start today" btnBgColor="bg-[#4F9CF9]" />
            </div>
          </div>
        </div>

        {/* bottom Footer */}
        <div className="lg:border-t border-[#2E4E73] pt-6  flex flex-col lg:flex-row lg:justify-between  text-base">
          <div className="border-b lg:border-b-0 border-[#2E4E73] pb-5 lg:pb-0 flex flex-col md:flex-row gap-y-5 lg:gap-x-15 justify-between">
            <div>Terms & privacy</div>
            <div>Security</div>
            <div>Status</div>
            <div>©2021 Whitepace LLC.</div>
          </div>

          <div className="pt-5 lg:pt-0 flex gap-x-8 justify-center md:justify-start">
            <div>
              {' '}
              <img src="images/Icon_11_.png" alt="" />
            </div>
            <div>
              <img src="images/Twitter.png" alt="" />
            </div>
            <div>
              {' '}
              <img src="images/Linkedin.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
