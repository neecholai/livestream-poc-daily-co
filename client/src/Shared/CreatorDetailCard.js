import React from "react";
import { Media } from "react-bootstrap";
import "./CreatorDetailCard.scss";

function CreatorDetailCard({ creator }) {
  const { name, bio, social, website, email, photo_url } = creator;

  return (
    <div className="col-lg-8 CreatorDetailCard">
      <h5 className="text-justify-xs"> About {name} </h5>
      <Media>
        <div>
          <img
            className="image"
            src={photo_url}
            alt={`profile pic for ${name}`}
          />
        </div>
        <Media.Body>
          <div>
            <p>{bio}</p>
            <p>
              {social.twitter && (
                <a href={`http://www.twitter.com/${social.twitter}`} target="blank">
                  <i className="fab fa-twitter fa-lg fa-fw"></i>
                </a>
              )}
              {social.instagram && (
                <a href={`http://www.instagram.com/${social.instagram}`} target="blank">
                  <i className="fab fa-instagram fa-lg fa-fw"></i>
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`}>
                  <i className="far fa-envelope fa-lg fa-fw"></i>
                </a>
              )}
              {social.website && <a href={website} className="website"> {social.website}</a>}
            </p>
          </div>
        </Media.Body>
      </Media >
      <hr />
    </div>
  );
}

export default CreatorDetailCard;