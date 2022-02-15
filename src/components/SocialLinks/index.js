import React from "react";
import "./style.css";

function SocialLinks() {
  return (
    <div className="row">
      <div className="row">
        <div className="col-sm-12 text-center fluid">
          {/* <h5 className="email">mayankarora.email@gmail.com</h5> */}
          <a
            href="https://mail.google.com/mail/u/2/?ogbl#inbox?compose=VpCqJQwlVgZGvPChNDvdJSlNGKLhgwcVHHLHRqTlpmWXpnCpqNFmZxqrlgQTcBZtMFLcNlG"
            class="email"
            target="_blank"
          >
            mayankarora.email@gmail.com
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm" />
        <div className="col-sm text-center">
          <a href="https://github.com/mayankdrvr" target="_blank">
            <i class="fab fa-github-square fa-3x" />
          </a>
          <a href="https://www.linkedin.com/in/mayankdv/" target="_blank">
            <i class="fab fa-linkedin fa-3x" />
          </a>
        </div>
        <div className="col-sm" />
      </div>
    </div>
  );
}

export default SocialLinks;
