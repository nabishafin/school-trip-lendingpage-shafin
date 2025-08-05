import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic Plan",
      price: 14,
      highlighted: true,
      features: [
        { name: "Add point", included: true },
        { name: "Add point", included: true },
        { name: "Add point", included: true },
        { name: "Add point", included: true },
        { name: "Add point", included: true },
        { name: "Add point", included: false },
        { name: "Add point", included: false },
        { name: "Add point", included: false },
        { name: "Add point", included: false },
      ],
    },
    {
      name: "Standard Plan",
      price: 29,
      highlighted: false,
      features: [
        { name: "Add point", included: true },
        { name: "Add point", included: true },
        { name: "Add point", included: true },
        { name: "Add point", included: true },
        { name: "Add point", included: true },
        { name: "Add point", included: true },
        { name: "Add point", included: false },
        { name: "Add point", included: false },
        { name: "Add point", included: false },
        { name: "Add point", included: false },
      ],
    },
    {
      name: "Premium Plan",
      price: 30,
      highlighted: true,
      features: [
        { name: "Add point", included: true },
        { name: "Add point", included: true },
        { name: "Add point", included: true },
        { name: "Add point", included: true },
        { name: "Add point", included: true },
        { name: "Add point", included: true },
        { name: "Add point", included: true },
        { name: "Add point", included: false },
        { name: "Add point", included: false },
        { name: "Add point", included: false },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Choose your plan
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            Choose your subscription plan to enjoy exclusive salon product
            discounts, priority delivery, and personalized offers—tailored to
            fit your beauty needs and budget for a seamless, convenient shopping
            experience every month.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.highlighted
                  ? "border-2 border-blue-500 shadow-lg"
                  : "border border-gray-200"
              }`}
            >
              <CardHeader className="text-center pb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features List */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                          <X className="w-3 h-3 text-red-600" />
                        </div>
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Purchase Button */}
                <div className="pt-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium">
                    Purchase now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
