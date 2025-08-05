import Image from "next/image";
import phoneMockup from "../../public/bannericon.png";

export default function HowItWorks() {
  const steps = [
    {
      title: "Subscription Activation",
      description:
        "Easily purchase and activate the subscription to unlock premium features for organizing and managing school trips. Gain access to all essential tools for seamless event planning and coordination.",
    },
    {
      title: "Teacher Onboarding",
      description:
        "Add teachers and staff to the platform for smooth trip coordination. Grant them necessary permissions to manage trip schedules, communicate with participants, and oversee all event-related activities effectively.",
    },
    {
      title: "Group Formation",
      description:
        "Create specific event groups for different classes, teams, or trip activities. Organize participants into groups for efficient communication, updates, and coordination, ensuring everyone is well-informed and engaged throughout the trip.",
    },
    {
      title: "Messaging & Reminders",
      description:
        "Enable seamless communication through in-app messaging. Send timely reminders to parents, teachers, and students regarding important trip details, keeping everyone aligned with schedules, tasks, and notifications.",
    },
    {
      title: "Location & Alerts",
      description:
        "Share trip locations and key destinations for easy navigation. Send emergency alerts instantly to participants, ensuring quick responses and up-to-date information for safety and coordination during the trip.",
    },
  ];

  return (
    <section className=" py-10">
      <div className="w-full md:w-10/12 mx-auto px-10 ">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How it works...
          </h2>
          <p className="text-gray-600 max-w-7xl mx-auto text-base md:text-lg leading-relaxed">
            The app allows users to plan, organize, and manage school trips by
            creating event groups, sending notifications, tracking expenses,
            sharing locations, adding teachers, and providing real-time updates,
            ensuring smooth coordination and safety.
          </p>
        </div>

        {/* Main Content Grid - Image smaller, Content larger */}
        {/* Main Content Grid - Image smaller, Content larger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-12">
          {/* Phone Image - Takes up 4 columns */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              <Image
                src={phoneMockup}
                alt="School Trip Management App Interface"
                width={380}
                height={560}
                className="max-w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Content Steps - Takes up 8 columns */}
          <div className="lg:col-span-8 flex flex-col justify-center gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`space-y-3 ${
                  index === 0 ? "flex flex-col justify-center h-full" : ""
                }`}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
