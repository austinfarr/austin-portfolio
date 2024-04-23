"use client";

import { ArrowRightIcon, Mail, MessageSquare, User } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { sendContactForm } from "@/lib/api";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const initialFormData = {
  values: {
    name: "",
    email: "",
    message: "",
  },
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const { values, isLoading, error } = formData;

  const { toast } = useToast();

  console.log(formData);

  const handleChange = ({ target }) => {
    setFormData((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const handleSubmit = async (event) => {
    setFormData((prev) => ({ ...prev, isLoading: true }));

    const { name, email, message } = formData.values;

    event.preventDefault();
    // const formData = { name, email, message };

    try {
      const body = JSON.stringify({
        name,
        email,
        message,
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Accept: "application/json",
        },
        body: body,
      });
      console.log("response", response);

      if (response.ok) {
        setFormData(initialFormData);
        toast({
          description: "Your message has been sent.",
        });
        setIsSubmitted(true);
      } else {
        console.error("Error occurred!!!!!`:", error);
        setFormData((prev) => ({
          ...prev,
          isLoading: false,
          error: "An error occurred. Please try again later.",
        }));
      }
    } catch (error) {
      console.error("Error occurred!!!!!`:", error);
    }
  };

  return (
    <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      {isSubmitted && (
        <p className="text-green-500">
          Your message has been sent. I will get back to you ASAP!
        </p>
      )}
      <div className="relative flex items-center">
        <Input
          type="text"
          id="name"
          placeholder="Name"
          name="name"
          value={formData.values.name}
          onChange={handleChange}
        />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          value={formData.values.email}
          onChange={handleChange}
        />
        <Mail className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea
          placeholder="Type your message here..."
          name="message"
          value={formData.values.message}
          onChange={handleChange}
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button
        className="rounded-full flex items-center gap-x-1 max-w-[166px]"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            Sending... <ArrowRightIcon size={20} />
          </>
        ) : (
          <>
            Send <ArrowRightIcon size={20} />
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
