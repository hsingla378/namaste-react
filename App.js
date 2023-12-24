import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const title = (
  <h1 id="title" className="title">
    Namaste Himanshu!
  </h1>
);

// React Component

const HeadingComponent = () => {
  return <div id="container">{title}</div>;
};

const resList = [
  {
    info: {
      id: "5934",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-24 05:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: { header: "60% OFF", subHeader: "UPTO ₹120" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-708b731e-49c6-4f1f-8309-74b279d9a56c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "65797",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId: "b2edbc28b7b8219d6e0a9c049ce06658",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.4,
      parentId: "371281",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-24 04:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-708b731e-49c6-4f1f-8309-74b279d9a56c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "59627",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "ntjshqsv2k7vxtv7vmib",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹251 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "4961",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-24 03:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-708b731e-49c6-4f1f-8309-74b279d9a56c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-koramangala-bangalore-59627",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "229",
      name: "Meghana Foods",
      cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood",
      ],
      avgRating: 4.5,
      parentId: "635",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-24 02:00:00", opened: true },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-708b731e-49c6-4f1f-8309-74b279d9a56c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/meghana-foods-koramangala-bangalore-229",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "622030",
      name: "MOJO Pizza - 2X Toppings",
      cloudinaryImageId: "59b64f9bb67234987652437f21d379c2",
      locality: "Patel Narayana Reddy Layout",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
      avgRating: 4.6,
      parentId: "11329",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "13-23 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-24 02:00:00", opened: true },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-708b731e-49c6-4f1f-8309-74b279d9a56c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-patel-narayana-reddy-layout-koramangala-bangalore-622030",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "337335",
      name: "Kannur food kitchen",
      cloudinaryImageId: "a27weqanhnszqiuzsoik",
      locality: "1st Stage",
      areaName: "BTM Layout",
      costForTwo: "₹200 for two",
      cuisines: ["Kerala", "Biryani", "Beverages"],
      avgRating: 3.9,
      parentId: "114756",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-24 04:00:00", opened: true },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-708b731e-49c6-4f1f-8309-74b279d9a56c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/kannur-food-kitchen-1st-stage-btm-layout-bangalore-337335",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "619503",
      name: "Litti Heist",
      cloudinaryImageId: "kq5fmu174kikep8wfljh",
      locality: "1st Block",
      areaName: "Koramangala",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "Beverages", "Chaat"],
      avgRating: 4.3,
      parentId: "369080",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-24 03:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-708b731e-49c6-4f1f-8309-74b279d9a56c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/litti-heist-1st-block-koramangala-bangalore-619503",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "699329",
      name: "The fritter company",
      cloudinaryImageId: "81a4a575e0298eece46ed46cfe4f21cf",
      locality: "Near shell petrol pump",
      areaName: "Bellandur Sarjapur",
      costForTwo: "₹350 for two",
      cuisines: ["American", "Burgers", "Beverages"],
      avgRating: 4.2,
      parentId: "21135",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-24 06:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹700",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-708b731e-49c6-4f1f-8309-74b279d9a56c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-fritter-company-near-shell-petrol-pump-bellandur-sarjapur-bangalore-699329",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "661411",
      name: "AL-Arabic Shawarma",
      cloudinaryImageId: "b628e1f3e285b7f6d0a47df825d1babf",
      locality: "G M Reddy's Royale Apartments",
      areaName: "Bellandur Sarjapur",
      costForTwo: "₹300 for two",
      cuisines: ["Arabian", "Snacks", "Beverages"],
      avgRating: 4.3,
      parentId: "396951",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 6.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-12-24 07:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-708b731e-49c6-4f1f-8309-74b279d9a56c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/al-arabic-shawarma-g-m-reddys-royale-apartments-bellandur-sarjapur-bangalore-661411",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = ({ resList }) => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  // console.log("resData: " + resData);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    avgRating,
    costForTwo,
    sla,
  } = resData.info;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/99/18/ac/9918accf-79cb-ed83-ca7a-b62482dfb028/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body resList={resList} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
