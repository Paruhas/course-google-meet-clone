import Head from "next/head";
import { useRef, useState } from "react";
import Router from "next/router";

import googleMeetIcon from "../public/Assets/images/google-meet-icon.png";
import googleMeetImg from "../public/Assets/images/google-meet-people.jpg";

export default function Action() {
  const [enterCodeInput, setEnterCodeInput] = useState({
    enterCode: "",
  });

  const handlerEnterCodeInput = (e) => {
    const { name, value } = e.target;
    setEnterCodeInput((prev) => ({ ...prev, [name]: value }));
  };

  const handlerOnClickJoin = () => {
    const { enterCode } = enterCodeInput;

    if (!enterCode || !enterCode.trim()) {
      return;
    }

    Router.push(`/?meetingID=${enterCode}`);
  };

  const handlerKeyPressEnterAtInput = (e) => {
    const { enterCode } = enterCodeInput;

    if (!enterCode || !enterCode.trim()) {
      return;
    }

    if (e.code === "Enter") {
      Router.push(`/?meetingID=${enterCode}`);
    }
  };

  const enterCodeInputRef = useRef(null);

  const handlerOnClickJoinMeeting = () => {
    enterCodeInputRef.current.focus();
  };

  const handlerOnClickStartNewMeeting = () => {
    const newMeetingId =
      new Date().getTime() + Math.floor(Math.random() * 10000000000000);

    Router.push(`/?meetingID=${newMeetingId}`);
  };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create or Join Meeting</title>

        <link rel="stylesheet" href="../public/Assets/css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="body">
        <nav className="navbar navbar-expand-md fixed-top">
          <img src={googleMeetIcon.src} className="logo" alt="" />
          <a href="#" className="navbar-brand text-dark">
            <strong>Google</strong> Meet
          </a>
          <div className="collapse navbar-collapse justify-content-between">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  At a glance
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  How it works
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Plan and price
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mr-0">
              <li className="nav-item sign-in display-center">
                <a href="#" className="nav-link">
                  Sing In
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-secondary btn-lg text-info font-weight-bold join-meeting"
                  onClick={() => handlerOnClickJoinMeeting()}
                >
                  Join the meeting
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-lg btn-info text-light font-weight-bold new-meeting"
                  onClick={() => handlerOnClickStartNewMeeting()}
                >
                  Start the meeting
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <main>
          <div className="jumbotron h-100 d-flex">
            <div className="container w-50">
              <h1 className="font-size-3rem">
                Premium video meeting. Now it is available for free to everyone.
              </h1>
              <p className="font-size-20px">
                We're redesigning the Google Meet service for secure business
                meetings and making it free for everyone to use.
              </p>
              <ul className="display-center justify-content-center column-gap-20px">
                <li
                  role="button"
                  onClick={() => handlerOnClickStartNewMeeting()}
                >
                  <button className="btn btn-lg text-light font-weight-bold display-center btn-01796b new-meeting">
                    <span className="material-icons me-2">video_call</span>New
                    Meeting
                  </button>
                </li>
                <ul className="d-flex align-items-center">
                  <li className="pl-3">
                    <button className="btn btn-lg btn-outline-secondary text-dark font-weight-bold display-center bg-white">
                      <span className="material-icons me-2">keyboard</span>
                      <input
                        type="text"
                        placeholder="Enter a code"
                        className="enter-code border-none outline-none"
                        name="enterCode"
                        value={enterCodeInput.enterCode}
                        onChange={(e) => handlerEnterCodeInput(e)}
                        onKeyPress={(e) => handlerKeyPressEnterAtInput(e)}
                        ref={enterCodeInputRef}
                      />
                    </button>
                  </li>
                  <li
                    className="text-dark font-weight-bold ps-4 pe-4 join-action"
                    role="button"
                    onClick={() => handlerOnClickJoin()}
                  >
                    Join
                  </li>
                </ul>
              </ul>
            </div>
            <div className="container w-50">
              <img src={googleMeetImg.src} alt="" className="single-image" />
            </div>
          </div>
        </main>

        <footer className="d-flex">
          <div className="w-50 ">
            <p className="text-center">
              Learn more about{" "}
              <span className="learn-more text-info">google meet</span>
            </p>
          </div>
          <div className="w-50"></div>
        </footer>
      </div>

      <style jsx>
        {`
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .body {
            padding-top: 3.5rem;
          }

          .navbar {
            padding: 10px;
          }

          .logo {
            height: 43px;
          }

          .navbar-brand {
            font-size: 22px;
            padding: 0 0 0 8px;
            font-family: "PT Sans", Arial, sans-serif;
          }

          .nav-item a {
            color: #5f6368;
            font-siz: 16px;
            padding: 0 10px;
            font-weight: 600;
            text-decoration: none;
          }

          .display-center {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          li.nav-item {
            padding: 0 10px;
          }

          .jumbotron {
            padding: 4rem 2rem;
            margin-bottom: 2rem;
            border-radius: 0.3rem;
          }

          .font-size-3rem {
            font-size: 3rem;
          }

          .font-size-20px {
            font-size: 20px;
          }

          .single-image {
            height: 390px;
            border: 25px solid white;
            border-radius: 5px;
            box-shadow: 1px 1px 5px grey;
          }

          .btn-01796b {
            background-color: #01796b;
          }

          .bg-white {
            background-color: #ffffff;
          }

          .border-none {
            border: none;
          }

          .column-gap-20px {
            column-gap: 20px;
          }
        `}
      </style>
    </>
  );
}
