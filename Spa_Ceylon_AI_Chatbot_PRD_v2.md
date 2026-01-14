# PRODUCT REQUIREMENTS DOCUMENT
## Spa Ceylon AI Shopping Assistant

**Luxury Ayurveda | Est. 2009 | Sri Lanka**

---

| Document Info | |
|---------------|---|
| **Prepared by** | Sabiq |
| **Date** | January 2026 |
| **Version** | 2.0 |
| **Status** | Draft |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Company Overview](#2-company-overview)
3. [Product Catalog Structure](#3-product-catalog-structure)
4. [Ayurveda Dosha System](#4-ayurveda-dosha-system)
5. [Complete Spa Services Menu](#5-complete-spa-services-menu)
6. [Spa Locations](#6-spa-locations)
7. [E-Commerce & Payment Information](#7-e-commerce--payment-information)
8. [Chatbot Technical Requirements](#8-chatbot-technical-requirements)
9. [Brand Voice & UX Guidelines](#9-brand-voice--ux-guidelines)
10. [Sample Conversation Flows](#10-sample-conversation-flows)
11. [Implementation Roadmap](#11-implementation-roadmap)
12. [Success Metrics](#12-success-metrics)
13. [Conclusion](#13-conclusion)

---

## 1. Executive Summary

This document outlines the development of an AI-powered chatbot for Spa Ceylon, Sri Lanka's premier luxury Ayurveda brand. The chatbot will serve as a 24/7 intelligent shopping assistant, helping customers:

- Navigate the extensive product catalog of **450+ products**
- Book spa services across **18+ locations** in Sri Lanka
- Receive personalized Ayurvedic wellness recommendations based on their **Dosha body type**
- Understand pricing, packages, and special offers for **100+ spa rituals**

The implementation leverages **Claude API** to create a conversational interface that embodies Spa Ceylon's brand values: luxury, Ayurvedic wisdom, and contemporary Sri Lankan design. This solution addresses real customer pain points around product discovery, personalization, and efficient service booking.

---

## 2. Company Overview

### 2.1 Brand History

| Attribute | Details |
|-----------|---------|
| **Founded** | May 2009 by brothers Shiwantha Dias & Shalin Balasuriya |
| **Heritage** | 50+ years family expertise in Ayurveda health & beauty |
| **Global Presence** | 106+ locations across 26 countries, 4 continents |
| **Product Range** | 450+ all-natural Ayurveda-inspired products |
| **Position** | World's Largest Luxury Ayurveda Chain |
| **Corporate HQ** | 22nd Floor, Mireka Tower, Havelock City, Colombo 05 |
| **Social Media** | 190K+ Instagram followers (@spaceylonofficial) |

### 2.2 Brand Philosophy

Spa Ceylon combines the **5,000-year-old science of Ayurveda** with nature, modern design, and sensory indulgence. The brand derives its formulations from Royal Ceylonese well-being rituals practiced in the grand palaces of ancient Ceylon, creating products to purify, hydrate, treat, soothe and calm the body, mind and soul.

**Key Brand Elements:**

- **Visual Identity:** Green (nature) and black (earth) colors, Ceylonese Royal insignia, traditional motifs, Sinhala script, jewelled hues
- **Values:** Community fair trade, sustainable harvesting, wildlife conservation (Save the Majestic Ceylon Elephant campaign), cruelty-free products
- **Signature Aromas:** Lemongrass, sweet lime, water grass (welcome scent at all spas)
- **Key Ingredients:** Organic essential oils, sun-kissed fresh Aloe Vera, pure extra virgin coconut oil, mineral-rich Indian Ocean salts, Ceylon spices

### 2.3 Brand Taglines & Messaging

- "Ayubowan" - Traditional Sri Lankan greeting meaning "may you live long"
- "Luxury Ayurveda"
- "Soothe, calm & relax the body, mind & soul"
- "Where Good Living reigns"

---

## 3. Product Catalog Structure

### 3.1 Main Product Categories

| Category | Sub-categories & Products |
|----------|---------------------------|
| **SKIN WELLNESS** | **Ranges:** Bakuchiol, Frankincense, Lotus & Rambutan, Neem & Tea Tree, Sal & Saffron, MoringaHerb, Ashwagandha, Citrus Glow, Tamarind, True Turmeric, Virgin Coconut, White Jasmine, White Rice, White Mint. **Categories:** Face Wash/Cleansers, Day/Night Serums, Facial Masques, Eye Care, BB Creams, Lip Care (Balms, Scrubs, Tinted), Men's Skincare. **Skin Types:** Acne Prone, Combination, Dry, Mature, Normal, Oily, Sensitive |
| **MIND & BODY** | **Ranges:** De-Stress, Peace, Sleep, Sleep Intense, Sensual Sandalwood, Neroli Jasmine, Cardamom Rose, Virgin Coconut, ForestVeda, SeaVeda, Green Mint, Frankincense Kay Lime. **Categories:** Bath & Body Oils, Body Scrubs, Luxury Soaps, Shower Gels, Body Lotions, Natural Butters, Wellness Balms & Inhalers, Foot Care, Hand Care, Herbal Teas. Also includes Baby Care products. |
| **HAIR WELLNESS** | **Ranges:** Kesharaja, Virgin Coconut, Neroli Jasmine, Margosa Mint, Aloe Vera Watergrass, Sandalwood Vetiver, Forest Trail (Men). **Categories:** Cleansers, Conditioners, Treatment Oils, Hair Masques, Hair Serums. **Concerns:** Thin/Weak/Falling Hair, Dry/Unruly, Damaged/Colored, Dandruff/Problem Scalp |
| **HOME AROMA** | **Ranges:** Jewel Fruits, Cardamom Rose, Neroli Jasmine, Ylang Lavender, Forest Trail, Frankincense, Pink Grapefruit, Ceylon Elephant, Lemongrass Mandarin, Spiced Sandalwood, Royal Lotus, Vanilla Rose. **Categories:** Natural Candles, Room Aromizers/Diffusers, Essential Oils, Incense Sticks, Room Aroma Mists, Car Wellness Pods, Aroma Sachets |
| **FRAGRANCES** | **For Her:** Body Sprays (Beach & Floral collections), Eau De Perfumes, Eau De Ceylon Colognes, Roll-Ons, Creme Perfumes, Deodorants, Perfumed Body Lotions & Shower Gels. **For Him:** Body Sprays, Eau De Perfumes, Eau De Perfume Colognes, Deodorants |
| **PALACEWARE** | **Home Lifestyle:** Bar & Entertaining, Bed & Bath, Living & Dining, Tea & Pantry. **Home Decor:** Porcelain & Stoneware, Textile, Lacquerware, Glass & Bamboo. **Items:** Bamboo Mugs, Cushion Covers, Glassware, Napkins, Notebooks, Place Mats, Plates, Towels, Trays, Wellness Bags |
| **GIFTING** | **Gift Cards:** Spa Rituals, E-Gift Cards, Gift Vouchers. **Collections:** Discovery Sets, Home Spa Sets, Wellness Trios, Essential Sets. **By Price:** Under 5K, Under 10K, Under 20K. **Limited Editions:** Orchid Paradise, Ceylon Elephant Collection, Undersea Paradise |

---

## 4. Ayurveda Dosha System

Spa Ceylon products are formulated according to Ayurvedic Dosha principles. The chatbot must understand and recommend products based on the user's constitutional type. This is a **key differentiator** that sets Spa Ceylon apart from other wellness brands.

### 4.1 The Three Doshas

| Dosha | Elements | Characteristics | Product Recommendations |
|-------|----------|-----------------|------------------------|
| **VATA** | Air + Space | Thin build, dry skin, quick metabolism. Creative, energetic but prone to anxiety. Cold hands/feet. Light sleeper. Benefits from warmth, routine, grounding. | Warming oils (Sandalwood, Ginger), hydrating balms, Virgin Coconut range, Sleep Intense products, De-Stress collection. Avoid cooling products. |
| **PITTA** | Fire + Water | Medium build, warm body, sharp digestion. Intense, decisive, goal-oriented but can be irritable. Prone to inflammation, acidity. Benefits from cooling, relaxation. | Cooling products (Lotus & Rambutan, Water Lily), Peace collection, Neroli Jasmine range, White Jasmine for sensitive skin. Avoid heating/spicy products. |
| **KAPHA** | Water + Earth | Sturdy build, oily skin, slow metabolism. Calm, patient, loyal but may be sluggish. Prone to weight gain, congestion. Benefits from stimulation, light foods. | Stimulating products (Green Mint, Lemongrass), Neem & Tea Tree for oily skin, Energise range, lighter oils. Detox products. Avoid heavy, oily formulations. |

### 4.2 Dosha Quiz Questions (For Chatbot)

The chatbot can help users discover their Dosha through questions like:

1. **Skin Type:** (A) Dry and rough, (B) Oily with occasional redness, (C) Thick and tends to be oily
2. **Body Frame:** (A) Thin/light, (B) Medium/athletic, (C) Large/sturdy
3. **Sleep Pattern:** (A) Light sleeper, (B) Moderate, wake feeling hot, (C) Deep sleeper, hard to wake
4. **Stress Response:** (A) Anxiety/worry, (B) Irritability/anger, (C) Withdrawal/avoidance
5. **Energy Levels:** (A) Bursts of energy, tire quickly, (B) Moderate, focused, (C) Steady, enduring

---

## 5. Complete Spa Services Menu

> **Currency:** Sri Lankan Rupees (LKR)  
> **Note:** All rates include 10% service charge & applicable govt. taxes

### 5.1 Pricing Structure
- **Local Therapist:** Standard pricing
- **Foreign Therapist:** Premium pricing (not available at Dehiwala)

---

### 5.2 CEYLONESE BODY RITUALS

| Code | Ritual | Duration | Local (Rs.) | Foreign (Rs.) | Key Benefits |
|------|--------|----------|-------------|---------------|--------------|
| 907 | Hot Sand Massage Ritual | 90 min | 14,300 | 18,300 | Back & joint pain relief, jet lag relief, internal balance |
| 906 | Ultimate Body Ritual | 90 min | 14,300 | 18,300 | Joint aches, muscle pain, sports injuries recovery |
| 923 | Deep Tissue Massage Ritual | 90 min | 15,800 | 19,800 | Back & shoulder stiffness, sports injuries, travel fatigue |
| 916 | Back Pain Relief Ritual | 60 min | 12,700 | 16,700 | Lower back & shoulder pain relief |
| 803 | SeaVeda Uplifting Marine Body Ritual | 90 min | 15,700 | 19,700 | Ocean-inspired, fatigue release, muscle tension relief |

---

### 5.3 CALMING RITUALS

| Code | Ritual | Duration | Local (Rs.) | Foreign (Rs.) | Key Benefits |
|------|--------|----------|-------------|---------------|--------------|
| 920 | Sleep Therapy Calming Body Ritual | 90 min | 15,800 | 19,800 | Deep restful sleep, stress relief |
| 921 | Sleep Therapy Calming Scalp Ritual | 60 min | 7,600 | 10,600 | Sleep induction, head & neck relaxation |
| 804 | ForestVeda Calming Body Ritual | 90 min | 15,700 | 19,700 | Forest-inspired, inner balance, sleep preparation |

---

### 5.4 CALMING & DE-STRESS RITUALS

| Code | Ritual | Duration | Price (Rs.) | Notes |
|------|--------|----------|-------------|-------|
| 933 | Shirodhara Stress Relief Ritual | 90 min | 15,100 (L) / 19,100 (F) | *Royal Spa, WHITE SPA & Dutch Square only* |
| 885 | Deep Calming Shiro - Short Hair | 60 min | 9,500 | Third eye activation, scalp nourishment |
| 886 | Deep Calming Shiro - Mid Length Hair | 60 min | 10,600 | |
| 887 | Deep Calming Shiro - Long Hair | 60 min | 11,800 | |
| 945 | Deep Calming Shiro - Short Hair + Scalp Scrub | 60 min | 10,600 | |
| 949 | Deep Calming Shiro - Mid Length + Scalp Scrub | 60 min | 11,800 | |
| 988 | Deep Calming Shiro - Long Hair + Scalp Scrub | 60 min | 13,000 | |

*Shiro Rituals available at: Bambalapitiya, Kotte, Pelawatte, Nawala, Ward Place, Horton Place & Dehiwala*

---

### 5.5 CEYLONESE FOOT RITUALS

| Code | Ritual | Duration | Local (Rs.) | Foreign (Rs.) | Key Benefits |
|------|--------|----------|-------------|---------------|--------------|
| 901 | Ultimate Foot Ritual | 90 min | 7,600 | 11,600 | Reflexology + head/neck/shoulder massage included |
| 902 | Luxury Foot Ritual | 60 min | 6,800 | 9,800 | Reflexology, inner healing |
| 903 | Foot Rescue Ritual | 90 min | 8,700 | 12,700 | Severe foot pain, problem area treatment |
| 919 | Sleep Therapy Calming Foot Ritual | 90 min | 8,700 | 12,800 | Marma point therapy, sleep promotion |

*Foreign Therapist option not available at Dehiwala*

---

### 5.6 HEAD, NECK, BACK & SHOULDER RITUALS

| Code | Ritual | Duration | Local (Rs.) | Foreign (Rs.) | Key Benefits |
|------|--------|----------|-------------|---------------|--------------|
| 904 | Head, Neck & Shoulder Ritual | 60 min | 6,800 | 9,800 | Muscle tension relief + hand massage |
| 905 | Sinus Relief Ritual | 45 min | 6,800 | 9,800 | Sinus clearing, clarity |
| 909 | Stress Relief Ritual | 60 min | 6,800 | 9,800 | Third eye focus, headache/migraine relief |
| 911 | Scalp Massage Ritual | 60 min | 6,800 | 9,800 | Chakra point focus, sleep promotion |

---

### 5.7 CEYLONESE PURIFYING RITUALS

| Code | Ritual | Duration | Local (Rs.) | Foreign (Rs.) | Key Benefits |
|------|--------|----------|-------------|---------------|--------------|
| 936 | Body Polish Skin Renewal Ritual | 60 min | 12,700 | 15,700 | Exfoliation, hydration, radiance |
| 959 | Detox & Purify - Warming Mineral Body Wrap | 90 min | 16,600 | 20,600 | Toxin removal, chakra balancing |
| 850 | Detox Purifying Body Ritual | 120 min | 22,000 | 26,000 | Lymphatic drainage, coffee body polish |
| 935 | After-Sun Skin Rescue Ritual | 60 min | 12,700 | 15,700 | Sun damage repair, Aloe Vera treatment |

---

### 5.8 CARDAMOM ROSE BODY RITUALS

| Code | Ritual | Duration | Local (Rs.) | Foreign (Rs.) | Key Benefits |
|------|--------|----------|-------------|---------------|--------------|
| 874 | Cardamom Rose Body Ritual | 120 min | 21,300 | 25,300 | Himalayan Rose + Ceylon Cardamom, full body pampering |
| 879 | Cardamom Rose Body Ritual + Full Body Scrub | 135 min | 24,400 | 28,400 | Extended experience with scrub |

---

### 5.9 ROYAL KANDYAN RITUALS *(Signature Collection)*

| Code | Ritual | Duration | Local (Rs.) | Foreign (Rs.) | Key Benefits |
|------|--------|----------|-------------|---------------|--------------|
| 932 | Kandyan Body Ritual | 90 min | 15,800 | 19,800 | Royal Kandyan Massage, mineral crystal therapy |
| 930 | Royal Body Ritual | 120 min | 19,700 | 23,700 | Herbal foot bath, back rub, extended massage |
| 965 | Royal Body Ritual + Full Body Scrub | 135 min | 22,800 | 26,800 | Full scrub included |
| 929 | Royal Foot Ritual | 120 min | 8,700 | 12,700 | 30 min head/neck/shoulder massage included |

---

### 5.10 RADIANT GLOW BODY TREATMENT RITUALS

| Code | Ritual | Duration | Local (Rs.) | Foreign (Rs.) | Purpose |
|------|--------|----------|-------------|---------------|---------|
| 853 | Stage I - Glow Body Polish Ritual | 90 min | 14,300 | 18,300 | Purifies & primes skin |
| 817 | Stage II - Glow Booster (Full Body) | 90 min | 15,800 | 19,800 | Accelerates skin renewal |
| 818 | Stage II - Glow Booster (Full Hands) | 45 min | 8,800 | 11,800 | Hands only |
| 819 | Stage II - Glow Booster (Full Legs) | 60 min | 10,300 | 13,300 | Legs only |

---

### 5.11 INTENSE SPOT TREATMENTS

| Code | Area | Duration | Price (Rs.) |
|------|------|----------|-------------|
| 820 | Elbows | 45 min | 7,300 |
| 821 | Under-arms | 45 min | 8,800 |
| 822 | Knees | 45 min | 8,800 |
| 823 | Neck | 90 min | 10,300 |

---

### 5.12 GLOW FACIAL TREATMENT RITUALS
*Not available at Negombo, Galle, Weligama & Dutch Square*

| Code | Ritual | Duration | Price (Rs.) | Purpose |
|------|--------|----------|-------------|---------|
| 813 | Stage I - Ultra Glow Facial | 120 min | 17,900 | 8-step ritual, Floral Micro-Peeling |
| 814 | Stage II - Glow Accelerator Facial | 90 min | 15,500 | Precision Silk Peeling, sunburn reduction |
| 815 | Stage III - Glowlift Facial | 120 min | 17,900 | Floral Peel, Thermal Glow Mineral Masque |
| 848 | Stage IV - Glow Renewal Facial Peel | 120 min | 21,500 | Precision Hydro Therapy |

---

### 5.13 SOOTHING FACIAL RITUALS
*Not available at Negombo, Galle, Weligama & Dutch Square*

| Code | Ritual | Duration | Price (Rs.) | Key Features |
|------|--------|----------|-------------|--------------|
| 840 | Crystal Facial Ritual | 60 min | 13,200 | 8-step, meridian point massage, mineral crystals |
| 841 | Crystal Facial Ritual (Extended) | 90 min | 15,800 | Extended version |
| 855 | Rose Quartz - Soothing Facial | 90 min | 15,700 | Rose Quartz therapy, chakra massage |
| 842 | Purifying Facial Ritual | 45 min | 8,000 | Quick refresh, jet lag relief |
| 972 | Neem & Tea Tree - Anti-Acne Facial | 60 min | 13,200 | Acne-prone skin, pore clearing |
| 973 | White Rice - Age Defence Lifting Facial | 120 min | 17,900 | Anti-ageing, Rice Bran massage |
| 974 | Frankincense - Skin Energising (MEN) | 60 min | 13,100 | For men, razor burn relief |
| 975 | Virgin Coconut Deep Hydrating Facial | 60 min | 13,300 | Deep hydration, anti-oxidants |
| 900 | Moringa Herb - Exfoliating Facial | 90 min | 15,500 | Blackhead removal, oil control |
| 995 | Sal & Saffron - Ultra-Hydrating Plumping | 120 min | 21,500 | 4D hyaluronic acid, Light Therapy Masque |
| 996 | Bakuchiol - Age Defence Plumping | 120 min | 21,500 | Radio frequency therapy, lymphatic drainage |
| 884 | Glow Booster Facial Ritual | 60 min | 13,100 | Quick 60-min glow treatment |

---

### 5.14 PEDICURE & MANICURE RITUALS

| Code | Ritual | Duration | Price (Rs.) |
|------|--------|----------|-------------|
| 917 | Ultimate Pedicure Ritual | 120 min | 8,700 |
| 912 | Luxury Pedicure Ritual | 90 min | 6,800 |
| 938 | Luxury Manicure Ritual | 60 min | 6,800 |
| 971 | Nail Polish Application (Add-on) | - | 1,000 |
| 864 | French Polish Application | - | 1,800 |

---

### 5.15 ADD-ON TREATMENTS (FOOT SPA)

| Code | Treatment | Duration | Price (Rs.) |
|------|-----------|----------|-------------|
| 943 | Hot Oil Scalp Massage | 30 min | 4,100 |
| 950 | Hand Scrub | 15 min | 2,600 |
| 954 | Hand Mask | 15 min | 2,600 |
| 951 | Foot Scrub | 15 min | 2,600 |
| 955 | Foot Mask | 15 min | 2,600 |
| 952 | Hand Scrub & Mask | 30 min | 3,300 |
| 953 | Foot Scrub & Mask | 30 min | 3,300 |
| 968 | Foot Steaming | 20 min | 1,800 |
| 801 | Hot Herbal Compress | 10 min | 2,000 |
| 802 | Spa Ceylon Foot Massage | - | 4,000 |

---

### 5.16 ADD-ON TREATMENTS (BODY RITUALS)

| Code | Treatment | Duration | Price (Rs.) |
|------|-----------|----------|-------------|
| 940 | Body Scrub | 30 min | 5,600 |
| 942 | Cool Protein Hair Mask | 30 min | 4,100 |
| 944 | Lie-Down Foot Massage | 30 min | 4,100 |
| 947 | Kandyan Back Massage | 30 min | 4,100 |
| 946 | Deep Tissue Back Massage | 30 min | 4,900 |
| 849 | Hot Herbal Compress | 15 min | 2,500 |
| 941 | Crystal Body Polish | 30 min | 5,600 |
| 851 | Facial Massage | 20 min | 4,900 |
| 852 | Floral Bath* | 30 min | 9,600 |
| 869 | Bio-Cellulose Facial Masque | - | 2,600 |
| 948 | Ayur-Pressure Back Massage | 30 min | 4,900 |

*Floral Bath available at Royal & Dutch Square Spas only*

---

### 5.17 THREADING RITUALS

| Code | Area | Price (Rs.) |
|------|------|-------------|
| 828 | Full Face | 4,300 |
| 829 | Upper Lip | 1,000 |
| 830 | Chin | 1,100 |
| 831 | Eyebrows | 1,200 |
| 833 | Forehead | 1,000 |
| 832 | Face Sides | 1,800 |

---

### 5.18 WAXING RITUALS

| Code | Area | Price (Rs.) |
|------|------|-------------|
| 834 | Full Body | 15,100 |
| 835 | Full Hands & Arms | 4,900 |
| 836 | Full Legs | 5,600 |
| 989 | Full Face | 6,000 |
| 881 | Chin | 1,200 |
| 883 | Face Sides | 3,000 |
| 837 | Stomach | 4,100 |
| 839 | Back | 4,100 |
| 838 | Under-arms | 2,600 |
| 880 | Upper Lip | 1,200 |
| 882 | Forehead | 1,500 |

---

### 5.19 PAMPERING BRIDAL PACKAGES
*Not available at Galle, Negombo & Weligama*

#### RADIANCE BOOST RITUAL
*A gentle, indulgent glow-up for any special occasion*

| Treatment | Duration | Price (Rs.) |
|-----------|----------|-------------|
| Ultra Glow Facial Ritual | 120 min | 17,900 |
| Body Polish Skin Renewal Ritual | 60 min | 12,700 |
| Ultimate Pedicure | 120 min | 8,700 |
| **TOTAL** | | **39,300** |
| **Introductory Offer** | | **36,000 + Complimentary Gift Set** |

#### BLISSFUL RADIANCE RITUAL
*Glow-enhancing treatments for body, mind, & soul*

| Treatment | Duration | Price (Rs.) |
|-----------|----------|-------------|
| Glow Accelerator Facial Treatment Ritual | 90 min | 15,500 |
| Glow Body Polish Ritual | 90 min | 14,300 |
| Ultimate Body Ritual (Foreign Therapist) | 90 min | 18,300 |
| Express Pedicure | 45 min | 6,300 |
| **TOTAL** | | **54,400** |
| **Introductory Offer** | | **47,000 + Complimentary Gift Set** |

#### CELESTIAL GLOW RITUAL
*An elevated ritual of transformation and renewal*

| Treatment | Duration | Price (Rs.) |
|-----------|----------|-------------|
| Glow Renewal Facial Peel | 120 min | 21,500 |
| Glow Body Polish Ritual (Foreign Therapist) | 90 min | 18,300 |
| Luxury Body Ritual (Foreign Therapist) | 60 min | 17,000 |
| Full Body Waxing | - | 15,100 |
| **TOTAL** | | **71,900** |
| **Introductory Offer** | | **60,000 + Complimentary Gift Set** |

#### THE ROYAL GLOW RITUAL
*The Ultimate Spa Ceylon indulgence – radiant, refined, and regal*

| Treatment | Duration | Price (Rs.) |
|-----------|----------|-------------|
| Glow Renewal Facial Peel | 120 min | 21,500 |
| Cardamom Rose Body Ritual + Full Body Scrub (Foreign Therapist) | 135 min | 28,400 |
| Full body waxing | - | 15,100 |
| Luxury Pedicure ritual | 90 min | 6,800 |
| Deep Calming Shiro ritual | - | 11,800 |
| **TOTAL** | | **83,600** |
| **Introductory Offer** | | **71,000 + Complimentary Gift Set** |

**Special Notes:**
- 10% Discount on Day Packages over Rs. 45,000
- Mix and match treatments according to personal preference
- All treatments must be completed on the same day
- Terms and Conditions Apply

---

### 5.20 PRICING QUICK REFERENCE

| Budget Tier | Price Range (Rs.) | Examples |
|-------------|-------------------|----------|
| **Budget-friendly** | Under 7,000 | Threading, Hand/Foot scrubs, Sinus Relief Ritual |
| **Mid-range** | 7,000 - 15,000 | Foot rituals, Head/neck treatments, Basic facials |
| **Premium** | 15,000 - 22,000 | Body rituals, Royal Kandyan, Advanced facials |
| **Luxury** | 22,000+ | Detox packages, Bridal packages, Cardamom Rose |

---

## 6. Spa Locations

### 6.1 Spa Locations in Sri Lanka (18 Outlets)

| Location | Spa Type | Area |
|----------|----------|------|
| Chatham Street | Royal Heritage Spa | Colombo Fort |
| Bambalapitiya | Royal Heritage Spa | Colombo 4 |
| Kotte | Urban Spa | Sri Jayawardenepura |
| Rajagiriya | Heritage Spa | Rajagiriya |
| Ward Place | WHITE Spa | Colombo 7 |
| Horton Place | Heritage Spa | Colombo 7 |
| Mount Lavinia | Urban Spa | Mount Lavinia |
| Wattala | Heritage Spa | Wattala |
| Negombo | Heritage Spa | Negombo |
| Kollupitiya | Royal Indulgence | Colombo 3 |
| Cinnamon Bentota Beach | Resort Spa | Bentota |
| Nugegoda | Urban Spa | Nugegoda |
| Pelawatte | Urban Spa | Battaramulla |
| Galle | Heritage Spa | Galle Fort |
| Weligama | Boutique Spa | Weligama |
| Dehiwala | Heritage Spa | Dehiwala |
| Colombo City Centre | Heritage Spa | Colombo 2 |
| Nawala | Urban Spa | Nawala |

### 6.2 Location-Specific Availability Notes

| Ritual Type | NOT Available At |
|-------------|------------------|
| Shirodhara Stress Relief | All except Royal Spa, WHITE SPA & Dutch Square |
| Deep Calming Shiro Rituals | All except Bambalapitiya, Kotte, Pelawatte, Nawala, Ward Place, Horton Place & Dehiwala |
| Facial Rituals (Glow & Soothing) | Negombo, Galle, Weligama & Dutch Square |
| Bridal Packages | Galle, Negombo & Weligama |
| Foreign Therapist Option | Dehiwala |
| Floral Bath | All except Royal & Dutch Square Spas |

---

## 7. E-Commerce & Payment Information

### 7.1 Online Store Details

| Feature | Details |
|---------|---------|
| **Website** | lk.spaceylon.com (Sri Lanka), spaceylon.com (Global) |
| **Payment Methods** | Visa, MasterCard, American Express, Cash on Delivery (LKR 2,000-14,000 range) |
| **Installment Plans** | KOKO (3 installments, 60 days, 0% interest), Mintpay (3 installments, 0% interest) |
| **Delivery - Colombo** | 2-4 working days |
| **Delivery - Outstation** | 2-7 working days |
| **Free Delivery** | Orders above Rs. 12,000 |
| **Loyalty Program** | Spa Ceylon Rewards - points earning, exclusive member offers, Wellness Trail app |
| **Contact - Online** | (+94) 77 659 5757 |
| **Contact - Skin Consultation** | (+94) 77 659 5757 |
| **Email** | online@spaceylon.com |
| **Service Hours** | Daily 10am - 11pm |
| **B2B Enquiries** | (+94) 11 233 2638 |
| **Franchising** | (+94) 11 237 0912 / (+94) 11 237 0913 |

### 7.2 Gift Voucher Information

- Valid only at SPA CEYLON in Sri Lanka (excludes ODEL, Glomark, Kandy Fashions, Cinnamon Bentota, Colombo Airport & Glenloch)
- Must be presented at time of redemption
- Valid for products & services at full price only
- Not valid for online purchases or promotional merchandise
- Cannot be combined with other offers/promotions
- Full value must be redeemed in single transaction
- Non-refundable and non-replaceable if lost

---

## 8. Chatbot Technical Requirements

### 8.1 Core Functionality

**1. Product Discovery & Recommendations**
- Search products by category, range, skin type, concern, or ingredient
- Provide personalized recommendations based on Dosha type
- Compare products and suggest complementary items
- Highlight bestsellers, new arrivals, and award winners

**2. Spa Service Assistance**
- Provide spa location information and directions
- Explain spa rituals with full pricing (Local vs Foreign therapist)
- Share operating hours and contact information
- Recommend rituals based on needs (stress, sleep, pain relief, glow, etc.)
- Check availability restrictions by location
- Guide users to booking (redirect to phone/email for actual booking)

**3. Ayurvedic Education**
- Interactive Dosha quiz to determine user's body type
- Explain Ayurvedic principles in accessible language
- Provide wellness tips based on Dosha
- Educate on ingredient benefits (Virgin Coconut, Turmeric, Bakuchiol, etc.)

**4. Order & Gifting Support**
- Explain payment options including installment plans (KOKO, Mintpay)
- Clarify delivery timelines and costs
- Suggest gift sets by recipient, occasion, and budget
- Explain gift voucher redemption process
- Recommend bridal packages for special occasions

### 8.2 Technical Architecture

| Component | Specification |
|-----------|---------------|
| **AI Model** | Claude API (Anthropic) - claude-sonnet-4-5-20250929 recommended |
| **Frontend** | React.js widget embeddable on Shopify store, matching Spa Ceylon brand aesthetics |
| **Backend** | Node.js/Python API server handling Claude API calls, product database queries |
| **Knowledge Base** | Product catalog JSON, Spa menu JSON (100+ rituals with pricing), Ayurveda information, spa locations |
| **Integration** | Shopify API for product links, cart integration potential |

### 8.3 Data Files Required

1. `spa_ceylon_spa_menu_data.json` - Complete spa services with pricing
2. `spa_ceylon_products.json` - Full product catalog (to be created)
3. `spa_ceylon_locations.json` - Store and spa locations with details
4. `spa_ceylon_dosha_guide.json` - Dosha recommendations mapping

---

## 9. Brand Voice & UX Guidelines

### 9.1 Chatbot Personality

The chatbot should embody Spa Ceylon's brand essence: **luxurious yet accessible, knowledgeable about Ayurveda, warm and welcoming like a spa host.**

**Tone Characteristics:**
- Warm and welcoming (greet with "Ayubowan" - traditional Sri Lankan greeting meaning "may you live long")
- Knowledgeable but not condescending
- Luxurious and elegant in language
- Holistic wellness focused
- Patient and helpful

**Language Guidelines:**
- Use sensory descriptions (aromas, textures, experiences)
- Reference Sri Lankan/Ceylonese heritage naturally
- Explain Ayurvedic terms when first used
- Avoid pushy sales language
- Use phrases like "soothe, calm & relax the body, mind & soul"

### 9.2 Visual Design Recommendations

| Element | Recommendation |
|---------|----------------|
| **Primary Color** | Deep Forest Green (#1A5F4A) - matches brand identity |
| **Secondary Color** | Gold accents (#C9A962) - royal heritage feel |
| **Background** | Soft cream or white with subtle texture |
| **Chat Widget Icon** | Lotus flower or stylized Ceylonese motif |
| **Typography** | Clean sans-serif (like their website), with optional Sinhala script accents |
| **Bot Avatar** | Frangipani flower (their signature) or lotus |

### 9.3 Response Formatting

- Use bullet points sparingly for product lists
- Include pricing clearly when discussing spa services
- Always mention duration for spa rituals
- Note any location restrictions for services
- Offer to explain Ayurvedic terms when using them

---

## 10. Sample Conversation Flows

### 10.1 Product Discovery

**User:** I have oily skin and acne problems. What do you recommend?

**Bot:** Ayubowan! I understand dealing with oily, acne-prone skin can be challenging. Our **Neem & Tea Tree range** is specially formulated for your skin type - Neem has been used in Ayurveda for centuries for its purifying properties.

I'd recommend starting with our **Neem & Tea Tree Face Wash** to deeply cleanse without stripping your skin. For your Dosha type (which sounds like it might be Kapha-dominant), this range will help balance excess oil production.

Would you like me to suggest a complete skincare routine, or tell you more about any specific products?

---

### 10.2 Dosha Consultation

**User:** What is my Dosha type?

**Bot:** I'd be happy to help you discover your Dosha! In Ayurveda, your Dosha is your unique mind-body constitution - understanding it helps us recommend products perfectly suited to you.

Let me ask you a few questions:

**First, how would you describe your skin?**
- (A) Dry and rough
- (B) Oily with occasional redness
- (C) Thick and tends to be oily

---

### 10.3 Spa Booking Inquiry

**User:** I want to book a massage near Colombo 7

**Bot:** Wonderful choice! In Colombo 7, we have two beautiful spa locations:

1. **WHITE By Spa Ceylon** at 14 Ward Place - our signature all-white luxury spa
2. **Heritage Spa at Horton Place**

For a massage, I'd recommend our **Royal Body Ritual** (120 min):
- Local Therapist: Rs. 19,700
- Foreign Therapist: Rs. 23,700

It includes a herbal foot bath, tranquillity forehead massage, exfoliating back rub, and extended full body massage. Pure indulgence!

To book, you can call **077 659 5757** or contact the spa directly. Would you like the specific contact details, or shall I tell you about other massage options?

---

### 10.4 Price Inquiry

**User:** What's your cheapest facial?

**Bot:** Our most affordable facial option is the **Purifying Facial Ritual** at Rs. 8,000 (45 minutes). It's a classic deep-cleansing treatment with Ayurveda actives that:

- Removes impurities & tones skin
- Helps relieve jet lag
- Leaves skin smoothened, refined & visibly more radiant

It's perfect for a quick refresh! If you'd like something more comprehensive, our **Crystal Facial Ritual** at Rs. 13,200 (60 minutes) offers an 8-step experience with meridian point massage using precious mineral crystals.

Would you like to know about any other options?

---

### 10.5 Bridal Package Inquiry

**User:** I'm getting married next month. What packages do you have?

**Bot:** Congratulations on your upcoming wedding! 💐 We have four beautiful **Pampering Bridal Packages** designed to give you that perfect bridal glow:

| Package | Regular Price | Offer Price | Includes |
|---------|---------------|-------------|----------|
| **Radiance Boost** | Rs. 39,300 | Rs. 36,000 | Ultra Glow Facial + Body Polish + Ultimate Pedicure |
| **Blissful Radiance** | Rs. 54,400 | Rs. 47,000 | Glow Accelerator Facial + Body Polish + Body Ritual + Pedicure |
| **Celestial Glow** | Rs. 71,900 | Rs. 60,000 | Glow Renewal Peel + Body Polish + Luxury Body + Full Waxing |
| **The Royal Glow** | Rs. 83,600 | Rs. 71,000 | The ultimate indulgence - everything above + Cardamom Rose + Shiro |

All packages include a **complimentary gift set**! Plus, if your package is over Rs. 45,000, you get an additional **10% discount**.

*Note: These packages are available at most locations except Galle, Negombo & Weligama.*

Which package sounds perfect for your special day?

---

## 11. Implementation Roadmap

| Phase | Timeline | Deliverables |
|-------|----------|--------------|
| **Phase 1** | Week 1-2 | Knowledge base creation: Product catalog JSON, Spa menu JSON (✓ completed), Ayurveda/Dosha information, FAQ compilation |
| **Phase 2** | Week 3-4 | Core chatbot development: Claude API integration, System prompt engineering, Basic conversation flows |
| **Phase 3** | Week 5-6 | UI Development: React chat widget, Brand-aligned styling, Mobile responsive design |
| **Phase 4** | Week 7 | Testing & Refinement: User testing, Prompt optimization, Edge case handling |
| **Phase 5** | Week 8 | Demo & Documentation: Polished demo version, Technical documentation, LinkedIn showcase preparation |

---

## 12. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **User Engagement** | >3 min avg conversation | Analytics |
| **Query Resolution** | >80% without human handoff | Conversation logs |
| **Product Discovery** | >20% click-through to products | Link tracking |
| **Spa Inquiries** | Track bookings attributed to chatbot | Survey/tracking |
| **User Satisfaction** | >4.5/5 rating | Feedback prompts |

---

## 13. Conclusion

This AI chatbot represents an opportunity to enhance Spa Ceylon's digital customer experience while staying true to their brand values of luxury Ayurveda and Sri Lankan heritage. By combining the power of Claude's conversational AI with comprehensive product knowledge, complete spa pricing data, and Ayurvedic wisdom, the chatbot will serve as a **24/7 wellness consultant**, helping customers:

- Discover products suited to their unique Dosha
- Navigate 100+ spa rituals with transparent pricing
- Book the perfect treatment at any of 18 locations
- Find ideal gifts and bridal packages

The project demonstrates practical AI implementation skills while addressing real business needs in the wellness and e-commerce space.

---

## Appendix: Important Notes

### Spa Service Restrictions
- All rituals with back massages: Limited to upper back area only, done over clothing
- Foreign Therapist option: Not available at Dehiwala
- Facial Rituals: Not available at Negombo, Galle, Weligama & Dutch Square
- Bridal Packages: Not available at Galle, Negombo & Weligama
- Shirodhara: Only at Royal Spa, WHITE SPA & Dutch Square
- Floral Bath: Only at Royal & Dutch Square Spas

### Contact Quick Reference
- **Online Customer Service:** (+94) 77 659 5757
- **Email:** online@spaceylon.com
- **Service Hours:** Daily 10am - 11pm
- **Website:** lk.spaceylon.com

---

*Document Version 2.0 | January 2026 | Prepared for Spa Ceylon AI Chatbot Portfolio Project*
