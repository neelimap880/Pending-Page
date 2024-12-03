// src/components/Event.js
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Next.js optimized image loader
import { useRouter } from "next/navigation"; // Next.js router for navigation
import DetailCard from "../DetailCard/page";
import Profile from "../../../public/images/profile.png";
import Bollywood from "../../../public/images/bollywood night.png";
import "../../../styles/Home.css"; // Custom CSS module

const Home = () => {
  const router = useRouter(); // Next.js router for navigation
  const [searchText, setSearchText] = useState < string > "Search";
  const [activeIndex, setActiveIndex] = useState < number > 0;

  const headerParts = ["Pending", "Approved", "Rejected"];
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div>
      <div className="home1">
        <div className="headerF">
          <ul className="list">
            <li>
              <Image src={Logo} alt="Logo" width={50} height={50} />
            </li>
            {headerParts.map((part, index) => (
              <li
                key={index}
                className={`toggle ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="htext">{part}</span>
              </li>
            ))}
          </ul>
          <div className="ImageContainer">
            <Image
              className="rightImg"
              src={Profile}
              alt="Profile"
              width={50}
              height={50}
            />
          </div>
        </div>

        <div className="row secDiv">
          <div className="col-4 secondPart">
            <input
              className="searchBar"
              type="text"
              id="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            {/* Example DetailCard components */}

            <DetailCard
              url="/images/Media.png" // Use Image componentCal2}
              para={<p>Grand Park, New York</p>}
              bode={<p>Bollywood Night</p>}
            />
            <DetailCard
              url="/images/Frame 583.png"
              para={<p>Grand Park, New York</p>}
              bode={<p>Bollywood Night</p>}
            />
            <DetailCard
              url="/images/Frame 583.png"
              para={<p>Grand Park, New York</p>}
              bode={<p>Bollywood Night</p>}
            />

            <button className="button" onClick={() => router.push("/home")}>
              View More
            </button>
          </div>

          <div className="col thirdPart">
            <div className="row">
              <div className="headerF">
                <ul className="list">
                  <li style={{ fontSize: "30px" }}>Bollywood Night</li>
                  <li>
                    <span>
                      Posted Time - 10/08/2024 10:00 AM <br />
                      Posted By - Matheen Maaraa
                    </span>
                  </li>
                </ul>
                <div className="liButton">
                  <button className="pending">Pending</button>
                </div>
              </div>
              <div className="row">
                <div className="col detailThird">
                  <Image
                    src={Bollywood}
                    alt="Bollywood"
                    width={500}
                    height={250}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="detailThirdSec"></div>
                </div>

                <div className="col">
                  <DetailCard
                    url="/images/Group 2608065.png"
                    para={<p>Starting Time</p>}
                    bode={<p>18/08/2024 10:00 PM</p>}
                  />
                  <DetailCard
                    url="/images/Group 2608065.png"
                    para={<p>Ending Time</p>}
                    bode={<p>18/08/2024 10:00 PM</p>}
                  />
                  <DetailCard
                    url="/images/Group 2608066.png"
                    para={<p>Category</p>}
                    bode={<p>Dance & Music</p>}
                  />
                  <DetailCard
                    url="/images/solar_tag-price-bold.png"
                    para={<p>Price</p>}
                    bode={<p>$140.00</p>}
                  />
                  <DetailCard
                    url="/images/Group 2608066.png"
                    para={<p>Grand Park, New York</p>}
                    bode={<p>Full Address</p>}
                  />
                  <DetailCard
                    url="/images/Group 2608085_1.png"
                    para={<></>}
                    bode={
                      <p>
                        Join us for the energetic Bollywood night with music,
                        dancing, and fun
                      </p>
                    }
                  />
                </div>

                <div className="buttonContainer">
                  <button
                    className="button"
                    onClick={() => router.push("/home")}
                  >
                    Approve
                  </button>
                  <button
                    className="button"
                    onClick={() => router.push("/home")}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
