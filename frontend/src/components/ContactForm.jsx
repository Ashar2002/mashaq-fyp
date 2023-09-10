import React from "react";

const ContactForm = () => {
  return (
    <div>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="text-brown-0 sm:text-xl text-lg uppercase tracking-wider font-nunito mb-2">
                Contact Us
              </p>
              <h2 className="text-2xl font-bold text-brown-0 md:text-3xl mb-4">
                Reach Out and Connect
              </h2>

              <p className="max-w-xl text-lg">
                We value your input and inquiries, and we are readily available
                to assist you in any way we can. At Mashaq, your feedback is
                vital to our continuous enhancement and commitment to delivering
                exceptional shopping experiences. Please don't hesitate to reach
                out to us using the contact details below, and we'll be
                delighted to assist you:
              </p>

              <div className="mt-8">
                <a
                  href="tel:+923158540707"
                  className="text-2xl font-bold text-lightbrown-0"
                >
                  0315 8540707
                </a>

                <address className="mt-2 not-italic">
                  13 National Stadium Rd, Karsaz Faisal Cantonment, Karachi
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-300 border p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-300 border p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-300 border p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-300 border p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
