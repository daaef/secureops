import React from "react";
import Countdown from "react-countdown";
const Timeout = ({ duration, resend }) => {
  const Completionist = () => (
    <h2 className='text-sm'>
      Didn't get OTP?{" "}
      <span
        className='text-green-600 font-medium cursor-pointer'
        onClick={resend}
      >
        Resend
      </span>
    </h2>
  );

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return <Countdown date={Date.now() + duration} renderer={renderer} />;
};

export default Timeout;
