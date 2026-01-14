const doshaInfo = {
  doshas: {
    vata: {
      elements: "Air + Space",
      characteristics: {
        physical: ["Thin build", "Dry skin", "Quick metabolism", "Cold hands/feet"],
        mental: ["Creative", "Energetic", "Prone to anxiety", "Light sleeper"]
      },
      needs: ["Warmth", "Routine", "Grounding"],
      productRecommendations: [
        "Warming oils (Sandalwood, Ginger)",
        "Hydrating balms",
        "Virgin Coconut range",
        "Sleep Intense products",
        "De-Stress collection"
      ],
      avoid: ["Cooling products"]
    },
    pitta: {
      elements: "Fire + Water",
      characteristics: {
        physical: ["Medium build", "Warm body", "Sharp digestion", "Prone to inflammation, acidity"],
        mental: ["Intense", "Decisive", "Goal-oriented", "Can be irritable"]
      },
      needs: ["Cooling", "Relaxation"],
      productRecommendations: [
        "Cooling products (Lotus & Rambutan, Water Lily)",
        "Peace collection",
        "Neroli Jasmine range",
        "White Jasmine for sensitive skin"
      ],
      avoid: ["Heating/spicy products"]
    },
    kapha: {
      elements: "Water + Earth",
      characteristics: {
        physical: ["Sturdy build", "Oily skin", "Slow metabolism", "Prone to weight gain, congestion"],
        mental: ["Calm", "Patient", "Loyal", "May be sluggish"]
      },
      needs: ["Stimulation", "Light foods"],
      productRecommendations: [
        "Stimulating products (Green Mint, Lemongrass)",
        "Neem & Tea Tree for oily skin",
        "Energise range",
        "Lighter oils",
        "Detox products"
      ],
      avoid: ["Heavy, oily formulations"]
    }
  },
  quizQuestions: [
    {
      question: "How would you describe your skin?",
      options: {
        A: "Dry and rough",
        B: "Oily with occasional redness",
        C: "Thick and tends to be oily"
      },
      doshaMapping: {
        A: "vata",
        B: "pitta",
        C: "kapha"
      }
    },
    {
      question: "What is your body frame?",
      options: {
        A: "Thin/light",
        B: "Medium/athletic",
        C: "Large/sturdy"
      },
      doshaMapping: {
        A: "vata",
        B: "pitta",
        C: "kapha"
      }
    },
    {
      question: "How would you describe your sleep pattern?",
      options: {
        A: "Light sleeper",
        B: "Moderate, wake feeling hot",
        C: "Deep sleeper, hard to wake"
      },
      doshaMapping: {
        A: "vata",
        B: "pitta",
        C: "kapha"
      }
    },
    {
      question: "How do you typically respond to stress?",
      options: {
        A: "Anxiety/worry",
        B: "Irritability/anger",
        C: "Withdrawal/avoidance"
      },
      doshaMapping: {
        A: "vata",
        B: "pitta",
        C: "kapha"
      }
    },
    {
      question: "How would you describe your energy levels?",
      options: {
        A: "Bursts of energy, tire quickly",
        B: "Moderate, focused",
        C: "Steady, enduring"
      },
      doshaMapping: {
        A: "vata",
        B: "pitta",
        C: "kapha"
      }
    }
  ]
};

module.exports = doshaInfo;
