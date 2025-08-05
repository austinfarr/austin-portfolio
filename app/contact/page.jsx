import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <section className=" flex justify-center">
      <div className="container mx-auto px-4 mb-12">
        {/* Text */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-4">
          <h1 className="h1 max-w-md mb-8">Let&apos;s work together</h1>
          <p className="subtitle max-w-[550px] mb-8">
            Have ideas or projects you want to discuss? Feel free to reach out
            to me. I am always open to new opportunities and collaborations.
          </p>
          {/* Form */}
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
