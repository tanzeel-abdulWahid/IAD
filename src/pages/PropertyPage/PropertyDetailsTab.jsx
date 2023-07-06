import { useState } from "react";
import {
  CalendarOutlined,
  HomeOutlined,
  InfoOutlined,
  LineChartOutlined,
  MoneyCollectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Divider, Steps } from "antd";
import dumbbell from "../../assets/dumbbell.svg";
import pool from "../../assets/pool.svg";
import ImageSlider from "../../components/ImageSlider";
import styles from "../../style";
import FinancialDetails from "../../components/PropertyDetailsComp/FinancialDetails";
import PriceCard from "../../components/PropertyDetailsComp/PriceCard";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const homeDetails = [
  {
    icon: <UserOutlined />,
    heading: "Dubai, United Arab Emirates",
    desc: "A mature real estate market with a high return on investment",
  },
  {
    icon: <HomeOutlined />,
    heading: "Holiday home",
    desc: "Professionally managed short term rental for business travelers and families",
  },
  {
    icon: <MoneyCollectOutlined />,
    heading: "Average daily rate of $500",
    desc: "Monthly rental income will vary based on daily rate and occupancy levels",
  },
  {
    icon: <CalendarOutlined />,
    heading: "80% average occupancy rates",
    desc: "Daily rates and occupancy levels will vary by season",
  },
  {
    icon: <LineChartOutlined />,
    heading: "14.26% projected annual gross yield",
    desc: "With an expected net yield of 7.05% and a price per square foot of $2,057 ",
  },
];

const featuresIcons = [
  <UserOutlined />,
  <HomeOutlined />,
  <MoneyCollectOutlined />,
  <CalendarOutlined />,
  <LineChartOutlined />,
];

const PropertyDetailsTab = () => {
  // put the properties in the props
  let propertyDesc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis ratione id! Dolore voluptates neque similique ullam! Voluptatem beatae aliquam labore magni quibusdam expedita consectetur dolores corporis pariatur. Debitis, hic!
    Perspiciatis deserunt quidem quae molestiae cumque, sunt at molestias distinctio, fugiat quis qui. Voluptatum illo incidunt excepturi optio qui commodi eaque id eveniet vitae, labore, eligendi ducimus. Laudantium, quaerat repellendus!
    Dolore esse sequi voluptates praesentium, animi natus, ex veritatis laborum aspernatur pariatur dolorum nesciunt sit id illum repudiandae suscipit? Pariatur, numquam omnis ab deleniti nesciunt velit iusto itaque quas ipsam!
    Aspernatur perspiciatis aliquid dolor ad saepe repudiandae unde suscipit exercitationem quasi ducimus, recusandae nemo velit neque consequuntur! Asperiores rerum et culpa illo! Optio recusandae ratione doloremque tempore quisquam, modi nulla.
    Minima, similique eligendi! Exercitationem laudantium dignissimos mollitia, aperiam praesentium facilis eum nemo minima. Laudantium repudiandae laboriosam dolores praesentium voluptatum aut placeat tempore, eius temporibus fuga sapiente corrupti at saepe consequuntur!
    Fugit explicabo quasi quas ea, consequatur placeat eveniet voluptatum quibusdam iure cum quos, sed voluptatem nisi iste! Eaque architecto consequuntur error quisquam ex totam iure commodi laudantium est nihil? Veniam.
    Assumenda, cupiditate quas autem modi ad fugit fuga vero, saepe, dolores eius quia animi alias! Sapiente dolorem fugit quam eius consequatur aperiam, id nobis non inventore quo unde officia repellat.
    Voluptatibus velit, cumque neque quia fuga exercitationem suscipit eaque itaque laborum vitae! Eum, ut ad praesentium, excepturi tempora cumque ipsum est error, dolores earum totam quam. Facilis amet iste maxime.
    Nulla aperiam quas facere rem earum modi dolorum quisquam quaerat reiciendis, laborum sint explicabo at sequi. Expedita illum numquam magnam deserunt quibusdam? Nostrum enim laboriosam eaque sunt placeat sequi eos.
    Perferendis deleniti hic at dolore accusamus. Distinctio qui sit ab minima totam et dicta, corporis laudantium, corrupti impedit consequuntur eligendi itaque ipsa. Rerum tempora inventore autem dolores laudantium consectetur assumenda?`;

  const [text, setText] = useState(propertyDesc.slice(0, 400));
  const [readMore, setReadMore] = useState(false);

  const showMore = () => {
    if (!readMore) {
      setText(propertyDesc);
      setReadMore(true);
    } else {
      setText(propertyDesc.slice(0, 400));
      setReadMore(false);
    }
  };

  const { propertyNumber } = useParams();

  const properties = useSelector(
    (state) => state.propertiesSlice.client.available
  );

  const navigate = useNavigate();

  if (!properties[propertyNumber]) {
    navigate("/homepage");
  }

  const { property, isAvailable, investedAmount, numInvestors } =
    properties[propertyNumber];

  const {
    propertyName,
    totalValue,
    city,
    location,
    lowestValue,
    propertyFeatures,
    financialDetails,
    fundingTimeline,
    locationDetails,
    image,
  } = property;

  // console.log(property);

  return (
    <div className="">
      <h1
        className={`${styles.boldText} text-lightGreen text-2xl mb-6 text-center md:text-left`}
      >
        Portfolio {">"}{" "}
        <span className="font-light text-base"> {"Property Name"} </span>{" "}
      </h1>
      <ImageSlider url={image} />

      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-[65%] md:p-5 p-2">
          {/* Left Div Content */}
          <div className="pr-5">
            {/* PROPERTY NAME */}
            <h1
              className={`${styles.boldText} text-lightGreen font-bold md:text-3xl mt-8`}
            >
              {propertyName}
            </h1>
            <h1 className="text-xs md:text-sm">
              {propertyFeatures.noBaths} Baths{" "}
              <span>
                {" "}
                <Divider type="vertical" className="border-black" />{" "}
              </span>{" "}
              {propertyFeatures.noBeds} Beds{" "}
              <span>
                {" "}
                <Divider className="border-black" type="vertical" />{" "}
              </span>{" "}
              {propertyFeatures.converedArea} sq.ft{" "}
              <span>
                {" "}
                <Divider className="border-black" type="vertical" />{" "}
              </span>{" "}
              {city}
            </h1>

            <Divider className="border-black" />

            {/* section one */}
            <div className="flex flex-col gap-y-6">
              {propertyFeatures.featureSection.length ? (
                propertyFeatures.featureSection.map((feature, i) => (
                  <div className="flex gap-x-6">
                    <div
                      key={i}
                      className="p-3 text-2xl rounded-[100%] flex items-center h-11 w-10"
                    >
                      {featuresIcons[i]}
                    </div>
                    <div>
                      <h1 className="font-bold text-lg">{feature.heading}</h1>
                      <p className="text-sm font-light text-gray-600">
                        {feature.details}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex gap-x-6"> No Features</div>
                </>
              )}
            </div>

            <Divider className="border-lightGray" />

            {/* Property Overview*/}
            <h1
              className={`${styles.boldText} text-lightGreen font-bold md:text-3xl pt-14 pb-5`}
            >
              Property Overview
            </h1>
            <div className="pb-4">
              <p>
                {propertyFeatures.propertyOverview} {!readMore && "..."}
              </p>
              <p
                onClick={showMore}
                className="font-bold text-lightGreen cursor-pointer"
              >
                {" "}
                {readMore ? "Show Less" : " Read More"}
              </p>
            </div>

            <Divider className="border-lightGray" />

            {/* Financial Details */}
            <FinancialDetails details={financialDetails} price={totalValue} />
            <Divider className="border-lightGray" />

            {/* Funnding TimeLine */}
            <h1
              className={`${styles.boldText} text-lightGreen font-bold md:text-3xl pt-14 pb-5`}
            >
              Funding Timeline
            </h1>

            {/* Steps */}
            <Steps
              progressDot
              current={1}
              direction="vertical"
              size="default"
              className="font-bold pt-3"
              items={fundingTimeline.map((e) => {
                return { title: e.date, description: e.details };
              })}
            />
            <Divider className="border-lightGray" />

            {/* Location */}
            <h1
              className={`${styles.boldText} text-lightGreen font-bold md:text-3xl pt-12 pb-5`}
            >
              Location
            </h1>
            <div>
              <h1 className="flex items-center gap-x-2 font-bold text-lg">
                {" "}
                <span className="bg-white flex items-center w-9 h-9 rounded-[100%] p-2">
                  {" "}
                  <InfoOutlined />{" "}
                </span>{" "}
                {location}{" "}
              </h1>
              <h1 className="text-base pt-5 font-thin">{locationDetails}</h1>
            </div>
            <Divider className="border-lightGray" />

            {/* Amenities */}
            <h1
              className={`${styles.boldText} text-lightGreen font-bold md:text-3xl pt-12 pb-5`}
            >
              Amenities
            </h1>
            <div className="flex justify-between md:w-64">
              <div className="flex gap-x-4 items-center">
                <img src={dumbbell} alt="" />
                <h1>Gym</h1>
              </div>
              <div className="flex gap-x-4 items-center">
                <img src={pool} alt="" />
                <h1>Pool</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Right Div Content */}
        <div className="w-full md:w-[35%] md:h-fit p-2 md:p-5 md:sticky top-6 mt-8 bg-white rounded-lg">
          <PriceCard
            details={{
              financialDetails,
              isAvailable,
              investedAmount,
              numInvestors,
              totalValue,
              propertyId: property._id,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsTab;
