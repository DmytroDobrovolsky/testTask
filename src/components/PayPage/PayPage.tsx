import { usePayPage } from "./usePayPage";
import "./PayPage.css"
import CircularProgress from "@mui/material/CircularProgress";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Select from "@mui/material/Select";
import { Box, FormControl, MenuItem } from "@mui/material";

function PayPage() {
  const {
    handlePaymentInfoChange,
    handlePayButt,
    handelClosePopUp,
    paymentInfo,
    payButtStatus,
    formRef,
    exchengedCrypto,
    payStatus,
  } = usePayPage();

  return (
    <div className="payPage">
      <form
        className="payForm"
        ref={formRef}
      >
        {payStatus.buttn && (
          <div className="popUpContainer">
            <CircularProgress />
          </div>
        )}
        {payStatus.popUp && (
          <div className="popUpContainer">
            <div className="popUp">
              <p className="popUpText">Transaction successfully</p>
              <button
                className="popUpButtn"
                type="button"
                onClick={handelClosePopUp}
              >
                <ClearOutlinedIcon />
              </button>
            </div>
          </div>
        )}
        <div className="titleContainer">
          <h1 className="formTitle">Crypto Exchange</h1>
        </div>
        <label className="payFormLabel">
          <p className="labelText">Select coin</p>
          <Box sx={{ minWidth: 20 }}>
            <FormControl fullWidth>
              <Select
                value={paymentInfo.coin}
                name="coin"
                className="inputForm"
                sx={{
                  backgroundColor: "white",
                }}
                onChange={handlePaymentInfoChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="USDT">USDT</MenuItem>
                <MenuItem value="BTC">BTC</MenuItem>
                <MenuItem value="ETH">ETH</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </label>
        <label className="payFormLabel">
          <p className="inputTitle">Write USD value</p>
          <input
            className="inputForm"
            name="usd"
            type="text"
            defaultValue=""
            placeholder="$    "
            onChange={handlePaymentInfoChange}
          />
        </label>
        <p className="pResult">Your result: {exchengedCrypto} </p>
        <button
          className="payButt"
          type="button"
          disabled={!payButtStatus}
          onClick={handlePayButt}
        >
          Pay
        </button>
      </form>
    </div>
  );
}

export default PayPage;
