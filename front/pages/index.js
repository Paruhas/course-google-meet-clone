import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function index() {
  const router = useRouter();

  const [showMeetingContainer, setShowMeetingContainer] = useState(false);

  useEffect(() => {
    connectToMeetingRoom();
  }, []);

  const MyApp = (function () {
    function init(uid, mid) {
      alert("From MyApp");
    }

    return {
      _init: function (uid, mid) {
        init(uid, mid);
      },
    };
  })();

  function connectToMeetingRoom() {
    const urlParams = router.query;

    const meeting_id = urlParams.meetingID;
    const user_id = window.prompt("Enter your userId");

    if (!user_id || !user_id.trim() || !meeting_id || !meeting_id.trim()) {
      alert("user id or meeting id missing");
      router.push("/action");
      return;
    }
    setShowMeetingContainer(true);

    MyApp._init(user_id, meeting_id);
  }

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Google Meet</title>

        <link rel="stylesheet" href="public/Assets/css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
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
        <main className="d-flex flex-column home-wrap">
          <div className="g-top text-light">
            <div className="top-remote-video-show-wrap d-flex">
              <div
                className={`${showMeetingContainer ? "" : "d-none"} w-75`}
                id="meetingContainer"
              >
                <div className="call-wrap bg-black">
                  <div className="video-wrap d-flex flex-wrap" id="divUsers">
                    <div id="me" className="userbox display-center flex-column">
                      <h2 className="display-center font-size-14px"></h2>
                      <div className="display-center">
                        <video
                          autoPlay
                          muted
                          className="d-none"
                          id="localVideoPlayer"
                        ></video>
                      </div>
                    </div>
                    <div
                      id="otherTemplate"
                      className="userbox display-center flex-column d-none"
                    >
                      <h2 className="display-center font-size-14px"></h2>
                      <div className="display-center">
                        <video autoPlay muted></video>
                        <audio
                          autoPlay
                          controls
                          muted
                          className="d-none"
                        ></audio>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="g-top-left bg-light text-secondary w-25 d-flex align-items-center justify-content-between ps-2 pe-2">
              <div className="top-left-participant-wrap pt-2 cursor-pointer">
                <div className="top-left-participant-icon">
                  <span className="material-icons">people</span>
                </div>
                <div className="top-left-participant-count participant-count">
                  2
                </div>
              </div>
              <div className="top-left-chat-wrap pt-2 cursor-pointer">
                <span className="material-icons">message</span>
              </div>
              <div className="top-left-time-wrap"></div>
            </div>
          </div>
          <div className="g-bottom bg-light m-0 d-flex justify-content-between align-items-center">
            <div className="bottom-left d-flex vh-10">
              <div className="display-center cursor-pointer meeting-details-button">
                Meeting Details
                <span className="material-icons">keyboard_arrow_down</span>
              </div>
            </div>
            <div className="bottom-middle d-flex justify-content-center align-items-center vh-10">
              <div
                className="mic-toggle-wrap action-icon-style display-center me-2 cursor-pointer"
                id="miceMuteUnmute"
              >
                <span className="material-icons">mic_off</span>
              </div>
              <div className="action-icon-style display-center me-2 cursor-pointer">
                <span className="end-call-wrap material-icons text-danger">
                  call
                </span>
              </div>
              <div className="video-toggle-wrap action-icon-style display-center cursor-pointer">
                <span className="material-icons">videocam_off</span>
              </div>
            </div>
            <div className="bottom-right d-flex justify-content-center align-items-center me-3 vh-10">
              <div className="present-now-wrap d-flex justify-content-center flex-column align-items-center me-5 cursor-pointer">
                <span className="material-icons">present_to_all</span>
                <div>Present Now</div>
              </div>
              <div className="option-wrap cursor-pointer display-center vh-10 position-relative">
                <div className="option-icon">
                  <span className="material-icons">more_vert</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>
        {`
          .bg-black {
            background-color: black;
          }

          .font-size-14px {
            font-size: 14px;
          }

          .display-center {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .cursor-pointer {
            cursor: pointer;
            padding: 5px;
          }

          .cursor-pointer:hover {
            cursor: pointer;
            padding: 5px;
            background-color: rgb(225, 225, 225);
            border-radius: 5px;
          }

          .home-wrap {
            background-color: rgb(30, 30, 30);
          }

          .vh-10 {
            height: 10vh;
          }

          .g-top {
            height: 90vh;
            position: relative;
          }

          .video-wrap {
            height: 600px;
          }

          .video-wrap > * {
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: 250px;
            border: 1px solid white;
          }

          .g-top-left {
            position: absolute;
            right: 0;
            height: 8vh;
            top: 0;
            border-bottom-left-radius: 10px;
          }

          .top-left-participant-wrap {
            position: relative;
          }

          .top-left-participant-count {
            position: absolute;
            top: -2px;
            right: -3px;
            font-size: 15px;
          }

          .g-bottom {
            // margin: 0 -10px !important;
            padding: 0 20px;
            box-shadow: 0 0 5px black;
            z-index: 2;
          }

          .bottom-left {
            position: relative;
            padding: 5px;
          }

          .action-icon-style {
            font-size: 8px !important;
            height: 40px;
            width: 40px;
            border: 1px solid lightgrey;
            border-radius: 50%;
          }

          .action-icon-style span.material-icons {
            // font-size: 18px;
          }

          .end-call-wrap {
            -ms-transform: rotate(135deg);
            transform: rotate(135deg);
          }
        `}
      </style>
    </>
  );
}
