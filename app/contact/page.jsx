import ContactForm from "@/components/ContactForm";
import { MailIcon } from "lucide-react";

const ContactPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* Text and illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:min-h-[380px] ">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋🏼
            </div>
            <h1 className="h1 max-w-md mb-8">Let&apos;s work together</h1>
            <p className="subtitle max-w-[550px]">
              Have ideas or projects you want to discuss? Feel free to reach out
              to me. I am always open to new opportunities and collaborations.
            </p>
            {/* Form */}
            <ContactForm />
          </div>
          {/* Illustration */}
          <div
            className="hidden xl:flex xl:h-[500px] w-full bg-contact_illustration_light  dark:bg-contact_illustration_dark 
          bg-contain bg-top bg-no-repeat"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
