import DynamicBanner from "@/components/DynamicBanner";
import React from "react";
import pic from "@/public/aboutus.png";
import { Separator } from "@radix-ui/react-separator";

const AboutUs = () => {
  return (
    <div>
      <DynamicBanner img={pic} text={"About Us"} />
      {/* <<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>></> */}
      <div className="w-full md:w-10/12 mx-auto px-10 py-10">
        <div className=" mx-auto space-y-6 text-sm leading-relaxed">
          <p>
            We prioritize your privacy and are committed to protecting your
            personal information. We collect data such as your name, email, and
            job application details to help match you with relevant, diverse
            opportunities, improve user experience, and communicate important
            updates. Your data is stored securely using encryption and other
            safety measures to prevent unauthorized access. We do not share your
            information with third parties without your consent, except when
            required by law or to fulfill our services. You have the right to
            access, update, or delete your data at any time. For inquiries, feel
            free to contact us.
          </p>
          <Separator />
          <h2 className="font-bold text-base">
            How We Use Your Information. Your personal data is used to:
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Connect you with job opportunities</li>
            <li>Improve user experience on the website</li>
            <li>Respond to inquiries and support requests</li>
            <li>Send relevant job alerts and notifications</li>
          </ul>
          <p>
            Your data is stored securely using encryption and other safety
            measures to prevent unauthorized access. We do not share your
            information with third parties without your consent, except when
            required by law or to fulfill our services. You have the right to
            access, update, or delete your data at any time. For inquiries, feel
            free to contact us.
          </p>
          <Separator />
          <h2 className="font-bold text-base">
            How We Use Your Information. Your personal data is used to:
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Connect you with job opportunities.</li>
            <li>Improve user experience on the website.</li>
            <li>Respond to inquiries and support requests.</li>
            <li>Send relevant job alerts and notifications.</li>
          </ul>
          <p>
            We are committed to protecting your privacy. This Privacy Policy
            outlines how we collect, use, and safeguard your personal
            information when you access our services. Information We Collect: We
            collect personal data, such as name, email, and job preferences, to
            personalize your experience and provide relevant job opportunities.
            How We Use Your Information:
          </p>
          <p>
            Your information is used solely to enhance our services, provide job
            recommendations, and improve user experience. We do not share your
            personal data with third parties without your explicit consent. Data
            Security: We employ industry-standard security measures to protect
            your data from unauthorized access, alteration, or disclosure.
          </p>
          <Separator />
          <h2 className="font-bold text-base">Cookies and Tracking</h2>
          <p>
            We use cookies to improve website functionality and analyze user
            behavior. By using our website, you consent to the use of cookies.
          </p>
          <h2 className="font-bold text-base">Your right</h2>
          <p>
            You have the right to access, update, or delete your personal
            information at any time. Please contact us if you wish to make any
            changes.
          </p>
          <h2 className="font-bold text-base">
            Changes to this Privacy Policy
          </h2>
          <p>
            We reserve the right to modify this policy. Any changes will be
            posted on this page, with an updated date.
          </p>
          <h2 className="font-bold text-base">Contact Us</h2>
          <p>
            For any questions regarding your privacy, please reach out to us
            through our contact page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
