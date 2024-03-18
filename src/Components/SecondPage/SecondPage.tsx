import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./SecondPage.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className="frame-parent20">
      <div className="wrapper54">
        <FormControl
          className="formcontrol"
          variant="standard"
          sx={{
            borderColor: "#d175b6",
            borderStyle: "SOLID",
            borderTopWidth: "2px",
            borderRightWidth: "2px",
            borderBottomWidth: "2px",
            borderLeftWidth: "2px",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "8px",
            width: "100%",
            height: "56px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "56px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "56px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "56px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "56px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#d175b6",
              fontSize: 20,
              fontWeight: "Regular",
              fontFamily: "Kanit",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "20px",
            },
          }}
        >
          <InputLabel color="success" />
          <Select
            color="success"
            disableUnderline
            displayEmpty
            IconComponent={() => (
              <img
                width="24px"
                height="24px"
                src="/arrow.svg"
                style={{ marginRight: "20px" }}
              />
            )}
          >
            <MenuItem>Events</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className="frame-parent21">
        <div className="vector-parent">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <img className="vector-icon1" alt="" src="/vector-1.svg" />
          <img className="vector-icon2" alt="" src="/vector-1.svg" />
          <img
            className="vector-icon3"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <div className="frame-wrapper3">
          <div className="sub-item-parent">
            <TextField
              className="sub-item"
              placeholder="New Requests"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#d175b6" },
                "& .MuiInputBase-root": {
                  height: "36px",
                  backgroundColor: "#000",
                  fontSize: "14px",
                },
                "& .MuiInputBase-input": { color: "#d175b6" },
              }}
            />
            <div className="sub-item-group">
              <div className="sub-item1">
                <div className="campaigns">{`estimate `}</div>
              </div>
              <div className="wrapper55">
                <div className="div55">9</div>
              </div>
            </div>
            <div className="sub-item2">
              <div className="campaigns1">Events</div>
            </div>
            <div className="sub-item3">
              <div className="campaigns2">Partial Requests</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent22">
        <div className="parent6">
          <div className="div56">
            <h3 className="positions3">Positions</h3>
          </div>
          <div className="div57">
            <h3 className="contractors">Contractors</h3>
          </div>
          <div className="div58">
            <div className="users-wrapper">
              <h3 className="users">Users</h3>
            </div>
            <img
              className="arrow-icon3"
              loading="lazy"
              alt=""
              src="/arrow-1.svg"
            />
          </div>
        </div>
        <div className="frame-parent23">
          <div className="frame-parent24">
            <div className="vector-group">
              <img className="vector-icon4" alt="" src="/vector-4.svg" />
              <img className="vector-icon5" alt="" src="/vector-1.svg" />
              <img
                className="vector-icon6"
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
            </div>
            <div className="list-wrapper">
              <div className="list">
                <div className="sub-item4">
                  <div className="campaigns3">admins</div>
                </div>
                <div className="sub-item5">
                  <div className="campaigns4">clients</div>
                </div>
                <div className="sub-item6">
                  <div className="campaigns5">Coordinators</div>
                </div>
              </div>
            </div>
          </div>
          <div className="div59">
            <h3 className="profile">Profile</h3>
          </div>
        </div>
      </div>
      <Button
        className="button"
        startIcon={<img width="24px" height="24px" src="/upload.png" />}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#000",
          borderRadius: "8px",
          "&:hover": { background: "#000" },
          height: 56,
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default FrameComponent1;