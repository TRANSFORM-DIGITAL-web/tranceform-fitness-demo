import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, MessageCircle, ArrowRight, Star } from "lucide-react";
import { PLANS } from "../data";
import { Plan } from "../types";
import SubscriptionModal from "./SubscriptionModal";

export default function MembershipPlans() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleScrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleEnquirePlan = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  return (
    <section id="plans" className="relative py-24 bg-brand-light overflow-hidden">
      {/* Visual Glow Spotlight behind cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.3em] font-extrabold text-brand-orange uppercase mb-3 block font-space-grotesk">
            MEMBERSHIP PLANS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-black uppercase italic tracking-tight font-space-grotesk mb-6">
            Invest in Your Health
          </h2>
          <div className="w-20 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-slate-500 font-plus-jakarta text-base sm:text-lg">
            No registration fees. No hidden taxes. Just fully transparent premium value to power your physical, aesthetic, and mental transformation.
          </p>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch pt-6">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between p-8 rounded-2xl transition-all duration-300 ${
                plan.isPopular
                  ? "bg-brand-black text-white border-2 border-brand-orange shadow-2xl md:scale-105 z-20"
                  : "bg-white text-brand-black border border-slate-200 hover:border-slate-300 hover:scale-[1.02] z-10"
              }`}
            >
              {/* Most Popular Badge on Top */}
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white font-space-grotesk text-[10px] uppercase font-black px-4 py-1.5 rounded-full tracking-widest shadow-lg flex items-center space-x-1 whitespace-nowrap">
                  <Star className="w-3 h-3 fill-white text-white" />
                  <span>Most Popular Program</span>
                </div>
              )}

              <div>
                {/* Plan Tier Name */}
                <h3 className={`text-xl font-black font-space-grotesk uppercase tracking-wide transition-colors duration-200 ${plan.isPopular ? "text-white" : "text-brand-black"}`}>
                  {plan.name}
                </h3>
                
                {/* Plan Description */}
                <p className={`text-xs font-plus-jakarta mt-2 min-h-[40px] leading-relaxed ${plan.isPopular ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.description}
                </p>

                {/* Price block */}
                <div className={`my-6 py-4 border-y ${plan.isPopular ? "border-neutral-800" : "border-slate-100"}`}>
                  <div className="flex items-baseline space-x-1">
                    <span className={`text-4xl sm:text-5xl font-black font-space-grotesk tracking-tight ${plan.isPopular ? "text-white" : "text-brand-black"}`}>
                      {plan.price}
                    </span>
                    <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider font-plus-jakarta">
                      / {plan.period}
                    </span>
                  </div>
                  <p className={`text-[10px] font-bold mt-1 uppercase tracking-wide ${plan.isPopular ? "text-brand-orange" : "text-brand-orange"}`}>
                    Avg ₹{Math.round(parseInt(plan.price.replace(/[^\d]/g, '')) / (plan.period.includes("Month") ? (plan.period.includes("3") ? 3 : plan.period.includes("6") ? 6 : plan.period.includes("12") ? 12 : 1) : 1))}/Mo equivalent
                  </p>
                </div>

                {/* Plan Benefits Checklist */}
                <ul className="space-y-4 mb-8">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className={`flex items-start text-xs font-plus-jakarta ${plan.isPopular ? "text-neutral-300" : "text-slate-600"}`}>
                      <span className={`mr-2.5 mt-0.5 rounded-full p-0.5 inline-flex items-center justify-center shrink-0 border ${plan.isPopular ? "bg-neutral-900 border-neutral-800" : "bg-slate-50 border-slate-100"}`}>
                        <Check className="w-3 h-3 text-brand-orange stroke-[3]" />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons for Plan */}
              <div className={`space-y-3 pt-4 mt-auto border-t ${plan.isPopular ? "border-neutral-800" : "border-slate-100"}`}>
                {/* Book Free Trial First or Sign Up directly */}
                <button
                  onClick={handleScrollToBooking}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer ${
                    plan.isPopular
                      ? "bg-brand-orange hover:bg-brand-orange-light text-white shadow-xl hover:scale-105"
                      : "bg-brand-black hover:bg-brand-orange text-white"
                  }`}
                >
                  <span>Book Free Trial First</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* Direct WhatsApp Purchase Enquiry (Now pops up the lead capture Modal first!) */}
                <button
                  onClick={() => handleEnquirePlan(plan)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 cursor-pointer border ${
                    plan.isPopular
                      ? "text-slate-300 bg-neutral-950 border-neutral-800 hover:text-white hover:border-slate-700"
                      : "text-neutral-700 bg-slate-50 border-slate-200 hover:bg-slate-100 hover:text-brand-black"
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Enquire Via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Price transparency notice */}
        <div className="mt-12 text-center bg-white border border-slate-200 rounded-xl max-w-2xl mx-auto p-4 shadow-sm">
          <p className="text-xs text-slate-500 font-plus-jakarta leading-relaxed">
            💡 <strong className="text-brand-black">Flexible Installments Available:</strong> Talk to our front desk team to understand customized payment split terms for premium 6-Month and 12-Month packages.
          </p>
        </div>
      </div>

      {/* Subscription Capture Lead Modal */}
      <SubscriptionModal
        isOpen={selectedPlan !== null}
        onClose={() => setSelectedPlan(null)}
        planName={selectedPlan?.name || ""}
        planPrice={selectedPlan?.price || ""}
        planPeriod={selectedPlan?.period || ""}
      />
    </section>
  );
}
