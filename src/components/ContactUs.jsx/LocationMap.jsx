import React from "react";

const LocationMap = () => {
  return (
   
    <section className="bg-[#f8faf8] pt-12 pb-0">
      <div className="mx-auto max-w-7xl px-4">

        <div className="rounded-2xl bg-white p-6 shadow-md">

        
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Our Location
            </h2>

            <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-green-600"></div>
          </div>

        
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <iframe
              title="USWA Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108784.169859308!2d74.257171!3d31.520370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045f5c1dcb8b%3A0xb8f4bcb7f5c0e547!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LocationMap;