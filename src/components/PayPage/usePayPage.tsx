import { useEffect, useState } from "react";
import { course } from "../course/course";
import { useRef } from "react";

export function usePayPage() {
  const [paymentInfo, setPaymentInfo] = useState({
    usd: 0,
    coin: "",
  });
  const [exchengedCrypto, setExchangedCrypto] = useState("");
  const [payStatus, setPayStatus] = useState({
    buttn: false,
    popUp: false,
  });
  const [payButtStatus, setPayButtStatus] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function resetForm() {
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  const handlePaymentInfoChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "usd") {
      const sum = Number(value.trim());
      setPaymentInfo((prev) => ({ ...prev, usd: sum }));
    } else {
      setPaymentInfo((prev) => ({ ...prev, coin: value }));
    }
  };

  const handlePayButt = () => {
    setPayStatus((prev) => ({ ...prev, buttn: true }));
    setTimeout(() => {
      setPayStatus({
        buttn: false,
        popUp: true,
      });
    }, 2000);
  };

  const handelClosePopUp = () => {
    setPayStatus((prev) => ({ ...prev, popUp: false }));
    setPaymentInfo({
      usd: 0,
      coin: "",
    });
    setPayButtStatus(false);
    resetForm();
  };

  useEffect(() => {
    if (isNaN(paymentInfo.usd) === true) {
      setExchangedCrypto("Please use only number, for decimal use point");
    } else if (paymentInfo.usd === 0) {
      setExchangedCrypto("USD value must be more than 0");
    } else if (
      paymentInfo.coin !== "" &&
      paymentInfo.usd !== 0 &&
      isNaN(paymentInfo.usd) !== true
    ) {
      const selectedCoin = course[paymentInfo.coin as keyof typeof course];
      const exchangeResult =
        paymentInfo.usd / selectedCoin + " " + paymentInfo.coin;
      setExchangedCrypto(exchangeResult);
      setPayButtStatus(true);
      return;
    } else {
      setExchangedCrypto("Please select crypto coin");
    }
    setPayButtStatus(false);
  }, [paymentInfo]);

  return {
    handlePaymentInfoChange,
    handlePayButt,
    handelClosePopUp,
    payButtStatus,
    formRef,
    exchengedCrypto,
    paymentInfo,
    payStatus,
  };
}
