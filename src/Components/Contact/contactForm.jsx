import React from "react";
import TextInput from "../../Utils/Form/textInput";
import TextArea from "../../Utils/Form/textArea";
import Btn from "../../Utils/Button/btn";

const ContactForm = () => {
  return (
    <div>
      <TextInput
        title={"First Name"}
        type={"name"}
        placeholder={"Enter your first name"}
        className={"bg-white border-gray-100 rounded-md border-[2px]"}
      />
      <TextInput
        title={"Email Address"}
        type={"email"}
        placeholder={"Enter your Email Address"}
        className={"bg-white border-gray-100 rounded-md border-[2px]"}
      />
      <TextArea
        title={"Message"}
        placeholder={"Send us a short message"}
        className={"bg-white border-gray-100 rounded-md border-[2px]"}
      />
      <Btn
        text='Send Message'
        className={
          "text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900"
        }
      />
    </div>
  );
};

export default ContactForm;
