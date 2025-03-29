export default function Testimony() {
  return (
    <section className="text-gray-700 body-font bg-gray-50 py-16 md:py-24">
      <div className="container px-5 mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-amber-500 uppercase text-center mb-2">
            Testimonials
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            What Our Customers Say
          </h1>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-amber-500 mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.4 4.33333 15.9333C4.33333 14.3333 4.77778 12.8444 5.66667 11.4667C6.55556 10.0889 7.77778 9.03333 9.33333 8.3L12.3333 10C11.5556 10.5556 10.9111 11.2444 10.4 12.0667C9.88889 12.8889 9.63333 13.7556 9.63333 14.6667C9.63333 15.1556 9.73333 15.6 9.93333 16C10.1333 16.4 10.4444 16.7333 10.8667 17C11.5556 17.4889 12 18.1556 12.2 19C12.4 19.8444 12.3111 20.6444 11.9333 21.4L9.33333 21.3333ZM21.3333 21.3333C19.8667 21.3333 18.6667 20.8 17.7333 19.7333C16.8 18.6667 16.3333 17.4 16.3333 15.9333C16.3333 14.3333 16.7778 12.8444 17.6667 11.4667C18.5556 10.0889 19.7778 9.03333 21.3333 8.3L24.3333 10C23.5556 10.5556 22.9111 11.2444 22.4 12.0667C21.8889 12.8889 21.6333 13.7556 21.6333 14.6667C21.6333 15.1556 21.7333 15.6 21.9333 16C22.1333 16.4 22.4444 16.7333 22.8667 17C23.5556 17.4889 24 18.1556 24.2 19C24.4 19.8444 24.3111 20.6444 23.9333 21.4L21.3333 21.3333Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="leading-relaxed mb-8 text-gray-600">
                I am very satisfied with the phone case I bought here. The
                design is very stylish and the material is also high-quality.
                This case provides good protection for my phone without making
                it look bulky.
              </p>
              <div className="flex items-center">
                <img
                  alt="testimonial"
                  src="https://randomuser.me/api/portraits/men/3.jpg"
                  className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center border-2 border-amber-500 p-0.5 hover:scale-105 transition-transform duration-300"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-bold text-gray-900">
                    Sheva
                  </span>
                  <span className="text-amber-500 text-sm font-medium">
                    Satisfied Customer
                  </span>
                </span>
                <div className="text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block ml-1">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-amber-500 mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.4 4.33333 15.9333C4.33333 14.3333 4.77778 12.8444 5.66667 11.4667C6.55556 10.0889 7.77778 9.03333 9.33333 8.3L12.3333 10C11.5556 10.5556 10.9111 11.2444 10.4 12.0667C9.88889 12.8889 9.63333 13.7556 9.63333 14.6667C9.63333 15.1556 9.73333 15.6 9.93333 16C10.1333 16.4 10.4444 16.7333 10.8667 17C11.5556 17.4889 12 18.1556 12.2 19C12.4 19.8444 12.3111 20.6444 11.9333 21.4L9.33333 21.3333ZM21.3333 21.3333C19.8667 21.3333 18.6667 20.8 17.7333 19.7333C16.8 18.6667 16.3333 17.4 16.3333 15.9333C16.3333 14.3333 16.7778 12.8444 17.6667 11.4667C18.5556 10.0889 19.7778 9.03333 21.3333 8.3L24.3333 10C23.5556 10.5556 22.9111 11.2444 22.4 12.0667C21.8889 12.8889 21.6333 13.7556 21.6333 14.6667C21.6333 15.1556 21.7333 15.6 21.9333 16C22.1333 16.4 22.4444 16.7333 22.8667 17C23.5556 17.4889 24 18.1556 24.2 19C24.4 19.8444 24.3111 20.6444 23.9333 21.4L21.3333 21.3333Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="leading-relaxed mb-8 text-gray-600">
                The phone case I bought here fits perfectly with my lifestyle.
                Its durable material makes it resistant to damage even with
                frequent use. Highly recommended for those looking for quality
                phone cases!
              </p>
              <div className="flex items-center">
                <img
                  alt="testimonial"
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center border-2 border-amber-500 p-0.5 hover:scale-105 transition-transform duration-300"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-bold text-gray-900">
                    Ali
                  </span>
                  <span className="text-amber-500 text-sm font-medium">
                    Happy Customer
                  </span>
                </span>
                <div className="text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block ml-1">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}