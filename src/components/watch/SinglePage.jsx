import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { homeData, recommended } from "../../dummyData";
import { Upcoming } from "../upcoming/Upcoming";
import "./style.css";

export const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);
  const [rec, setRec] = useState(recommended);
  return (
    <>
      {item ? (
        <>
          <section className="singlePage">
            <div className="singleHeading">
              <h1>{item.name}</h1>
              <span> | {item.time} | </span> <span>HD</span>
            </div>
            <div className="container">
              <video src={item.video} controls></video>
              <div className="para">
                <h3>Date: {item.date}</h3>
                <p>{item.desc}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  corrupti nemo minima tenetur esse cumque perferendis
                  excepturi, possimus culpa ab, adipisci nisi nulla blanditiis
                  iusto deserunt. Id officiis expedita, amet, nesciunt, quas
                  voluptate in provident recusandae tenetur vero quidem natus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  corrupti nemo minima tenetur esse cumque perferendis
                  excepturi, possimus culpa ab, adipisci nisi nulla blanditiis
                  iusto deserunt. Id officiis expedita, amet, nesciunt, quas
                  voluptate in provident recusandae tenetur vero quidem natus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  corrupti nemo minima tenetur esse cumque perferendis
                  excepturi, possimus culpa ab, adipisci nisi nulla blanditiis
                  iusto deserunt. Id officiis expedita, amet, nesciunt, quas
                  voluptate in provident recusandae tenetur vero quidem natus.
                </p>
              </div>
              <div className="social">
                <h3>Share: </h3>
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                <img src="https://img.icons8.com/fluency/48/000000/twitter-circled.png" />
                <img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png" />
              </div>
            </div>
          </section>
          <Upcoming items={rec} title="Recommended Movies" />
        </>
      ) : null}
    </>
  );
};
