
const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen lg:px-32 p-8 bg-yellow">
      
      <div className="w-full mx-auto">
       

        {/* Our Mission Section */}
        <section className="my-16">
          <div className="flex items-center gap-10">
            <div className="w-[70%] ">
              <h2 className="text-4xl text-blue font-bold mb-4">Our Mission</h2>
              <p className="text-blue-extra-dark">
                At Bookish, our mission is to foster a community of book lovers
                by providing a platform that seamlessly connects readers,
                buyers, and sellers. We aim to celebrate the joy of reading and
                make the world of books more accessible to everyone. At Bookish,
                we believe in creating more than just a marketplace.
                <br /> <br />
                Join us in our mission to make the joy of reading accessible to
                all. We&apos;re building a community where every book has a
                story, and every reader finds a place to belong. Bookish is
                where books meet community, and stories unfold beyond the pages.
                Welcome to a literary journey where every interaction is an
                opportunity to share, connect, and celebrate the world of books.{" "}
                
              </p>
            </div>
            <div className="w-[30%]">
              <img
                src="src/assets/about-img/book (8).png"
                alt=""
                className="w-[300px] h-[300px]"
              />
            </div>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="mb-16">
          <div className="flex items-center gap-10">
            <div className="w-[30%]">
              <img
                src="src/assets/about-img/book (4).png"
                alt=""
                className="w-[300px] h-[300px]"
              />
            </div>
            <div className="w-[70%]">
              <h2 className="text-4xl text-blue font-bold mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-blue-extra-dark">
                At Bookish, our commitment to excellence goes beyond the
                ordinary. What sets us apart is the dedication to providing a
                personalized and inclusive experience for our users. We
                understand that every reader is unique, and so is their journey
                with books.
                <br />
                <br />
                <span className="font-semibold text-blue">
                  Diverse Book Ecosystem:
                </span>{" "}
                Explore a curated collection that goes beyond mainstream reads.
                We embrace diversity in genres, authors, and perspectives,
                ensuring there&apos;s something for every taste.
                <br />
                <span className="font-semibold text-blue">
                  Community-Centric Approach:
                </span>{" "}
                Bookish is not just a platform; it&apos;s a community. Engage
                with fellow book enthusiasts, share recommendations, and
                discover hidden literary gems. Our focus on community makes the
                Bookish experience more than just a transaction.
                <br />
                <span className="font-semibold text-blue">
                  User-Friendly Interface:
                </span>{" "}
                Navigate seamlessly through our user-friendly interface. Whether
                you&apos;re here to read, buy, or sell, Bookish offers an
                intuitive platform designed to enhance your overall experience.
               
              </p>
            </div>
          </div>
        </section>

        

        {/* Why Bookish Section */}
        <section>
          <div className="flex items-center gap-10">
            
            <div className="w-[70%]">
              <h2 className="text-4xl text-blue font-bold mb-4">
                Why Bookish?
              </h2>
              <p className="text-blue-extra-dark">
              Dive into a world of diverse stories and genres. Bookish offers an extensive range of books, ensuring that every reader discovers something new and exciting.
              
                Choose Bookish because we are more than just a marketplace — we
                are a community that values the magic of literature. Join us to
                be a part of something special, where the love for books unites
                us all. 
                <br />
                <br /> <span className="">Happy reading! 📚</span>
              </p>
              
            </div>
            <div className="w-[30%]">
              <img
                src="src/assets/about-img/book (6).png"
                alt=""
                className="w-[300px] h-[300px]"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
