export default function Features() {
  const features = [
    {
      title: "Trip Schedule Management",
      description:
        "Easily plan and organize school trips with detailed event schedules, including online forms, confirmations, ensure all participants are informed and prepared with up-to-date trip itineraries.",
    },
    {
      title: "Real-time Notifications",
      description:
        "Receive instant updates about trip changes, reminders, or emergencies through push notifications. Keep everyone in the loop during all phases of the trip, ensuring parents and teachers stay informed during the trip.",
    },
    {
      title: "Group Coordination",
      description:
        "Create groups for each class or event, enabling seamless communication between teachers, students, and parents. Track important updates, with alerts, and trip details in one convenient integrated platform.",
    },
    {
      title: "Emergency Alerts",
      description:
        "In case of an emergency, send instant alerts to all points-points, fitness staff, coordinators or safety. Alerting response to quickly notify parents and provide relevant information when needed.",
    },
    {
      title: "Location Maps",
      description:
        "Access real-time locations and landmarks for the trip. Ensure students and parents know where to go, especially in unfamiliar locations, helping everyone navigate smoothly and stay on schedule.",
    },
    {
      title: "Photo Sharing",
      description:
        "Capture and share photos during the trip. Parents and students can view and upload images, allowing for shared memories and easy access to photos after the trip concludes.",
    },
  ];

  return (
    <section className=" py-10">
      <div className="w-full md:w-10/12 mx-auto px-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Amazing features.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
