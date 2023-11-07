import OTPInput from "otp-input-react";

const OTP = ({ OTP, setOTP, length, secure }) => {
  return (
    <>
      <OTPInput
        value={OTP}
        onChange={setOTP}
        autoFocus
        OTPLength={length || 4}
        otpType='number'
        disabled={false}
        secure={secure}
        inputStyles={{
          gap: "6px",
          backgroundColor: "#dddd",
          fontWeight: "bold",
          fontSize: "1.4rem",
          width: "50px",
          height: "50px",
        }}
      />
    </>
  );
};

export default OTP;
