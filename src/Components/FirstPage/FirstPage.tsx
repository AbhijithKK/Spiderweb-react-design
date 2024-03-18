import { FunctionComponent, useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  TextField,

  Button,
} from "@mui/material";
import NavSection from "../NavSection/NavSection";
import "./FirstPage.css";

const MacBookPro16: FunctionComponent = () => {
    const onMacBookPro1626Click = useCallback(() => {
     
    // Navigate('/details')
  }, []);
  
  return (
    <div className="macbook-pro-16-26" onClick={onMacBookPro1626Click}>
      <div className="wrapper-group-1">
        <img className="wrapper-group-1-child" alt="" src="/group-1.svg" />
      </div>
      <main className="frame-parent">
        <NavSection />
        <section className="frame-wrapper">
          <form className="frame-group">
            <div className="frame-container">
              <div className="wrapper">
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
              <div className="frame-div">
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
                <div className="frame-wrapper1">
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
                      <div className="container">
                        <div className="div">9</div>
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
              <div className="frame-parent1">
                <div className="parent">
                  <div className="div1">
                    <div className="positions">Positions</div>
                  </div>
                  <div className="div2">
                    <div className="contractors">Contractors</div>
                  </div>
                  <div className="div3">
                    <div className="users-wrapper">
                      <div className="users">Users</div>
                    </div>
                    <img
                      className="arrow-icon"
                      loading="lazy"
                      alt=""
                      src="/arrow-1.svg"
                    />
                  </div>
                </div>
                <div className="frame-parent2">
                  <div className="frame-parent3">
                    <div className="vector-group">
                      <img
                        className="vector-icon4"
                        alt=""
                        src="/vector-4.svg"
                      />
                      <img
                        className="vector-icon5"
                        alt=""
                        src="/vector-1.svg"
                      />
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
                  <div className="div4">
                    <div className="profile">Profile</div>
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
            <div className="data-aggregator-parent">
              <div className="data-aggregator">
                <div className="input-filter">
                  <div className="output-processor">
                    <h1 className="event-requests">Event Requests</h1>
                  </div>
                  <TextField
                    className="input-filter-child"
                    placeholder="Search here"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <img width="24px" height="24px" src="/search01.svg" />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#fff" },
                      "& .MuiInputBase-root": {
                        height: "44px",
                        backgroundColor: "rgba(0, 0, 0, 0.01)",
                        paddingLeft: "16px",
                        borderRadius: "8px",
                      },
                      "& .MuiInputBase-input": {
                        paddingLeft: "10px",
                        color: "rgba(255, 255, 255, 0.8)",
                      },
                      width: "300px",
                    }}
                  />
                  <div className="input-filter-inner">
                    <div className="add-01-wrapper">
                      <img
                        className="add-01-icon"
                        loading="lazy"
                        alt=""
                        src="/add01.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent4">
                <div className="frame-parent5">
                  <div className="frame-wrapper2">
                    <div className="frame-parent6">
                      <div className="event-start-parent">
                        <div className="event-start">Event Start</div>
                        <div className="event-end">Event End</div>
                      </div>
                      <div className="arrow-wrapper">
                        <img
                          className="arrow-icon1"
                          loading="lazy"
                          alt=""
                          src="/arrow-2.svg"
                        />
                      </div>
                      <div className="client-name">Client Name</div>
                      <div className="arrow-container">
                        <img
                          className="arrow-icon2"
                          loading="lazy"
                          alt=""
                          src="/arrow-3.svg"
                        />
                      </div>
                      <div className="contact-info">Contact Info</div>
                      <div className="venue-wrapper">
                        <div className="venue">Venue</div>
                      </div>
                      <div className="city">City</div>
                      <div className="state">State</div>
                      <div className="zip-code">Zip Code</div>
                    </div>
                  </div>
                  <div className="frame-parent7">
                    <div className="show-wrapper">
                      <img className="show-icon" loading="lazy" alt="" />
                    </div>
                    <div className="event-name">Event Name</div>
                    <div className="arrow-frame">
                      <img
                        className="arrow-icon3"
                        loading="lazy"
                        alt=""
                        src="/arrow-3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="symbols-library">
                  <div className="effects">
                    <img className="show-icon1" alt="" src="/show-1.svg" />
                    <div className="filled-name">Filled Name</div>
                  </div>
                  <div className="fills">
                    <div className="jan-12-2024">Jan 12, 2024</div>
                  </div>
                  <div className="fills1">
                    <div className="jan-14-2024">Jan 14, 2024</div>
                  </div>
                  <div className="fills2">
                    <div className="muhammad-asad">Muhammad Asad</div>
                  </div>
                  <div className="fills3">
                    <div className="div5">+ 1 234 566 7890</div>
                  </div>
                  <div className="fills4">
                    <div className="lorem-ipsum-dolor">
                      Lorem ipsum dolor sit amet
                    </div>
                  </div>
                  <div className="fills5">
                    <div className="div6">-</div>
                  </div>
                  <div className="fills6">
                    <div className="div7">-</div>
                  </div>
                  <div className="fills7">
                    <div className="div8">-</div>
                  </div>
                </div>
                <div className="layout-alignment">
                  <div className="frame-parent8">
                    <div className="show-parent">
                      <img className="show-icon2" alt="" src="/show-1.svg" />
                      <div className="filled-name1">Filled Name</div>
                    </div>
                    <div className="guides">
                      <div className="jan-12-20241">Jan 12, 2024</div>
                    </div>
                    <div className="constraints">
                      <div className="jan-14-20241">Jan 14, 2024</div>
                    </div>
                    <div className="variables">
                      <div className="muhammad-asad1">Muhammad Asad</div>
                    </div>
                    <div className="symbol-instances">
                      <div className="master-components">+ 1 234 566 7890</div>
                    </div>
                    <div className="instance-components">
                      <div className="lorem-ipsum-dolor1">
                        Lorem ipsum dolor sit amet
                      </div>
                    </div>
                    <div className="design-systems">
                      <div className="plugins-libraries">-</div>
                    </div>
                    <div className="integrations">
                      <div className="connectors">-</div>
                    </div>
                    <div className="plug-ins">
                      <div className="add-ons">-</div>
                    </div>
                  </div>
                  <div className="frame-parent9">
                    <div className="show-group">
                      <img className="show-icon3" alt="" src="/show-1.svg" />
                      <div className="filled-name2">Filled Name</div>
                    </div>
                    <div className="jan-12-2024-wrapper">
                      <div className="jan-12-20242">Jan 12, 2024</div>
                    </div>
                    <div className="jan-14-2024-wrapper">
                      <div className="jan-14-20242">Jan 14, 2024</div>
                    </div>
                    <div className="muhammad-asad-wrapper">
                      <div className="muhammad-asad2">Muhammad Asad</div>
                    </div>
                    <div className="frame">
                      <div className="div9">+ 1 234 566 7890</div>
                    </div>
                    <div className="lorem-ipsum-dolor-sit-amet-wrapper">
                      <div className="lorem-ipsum-dolor2">
                        Lorem ipsum dolor sit amet
                      </div>
                    </div>
                    <div className="wrapper1">
                      <div className="div10">-</div>
                    </div>
                    <div className="wrapper2">
                      <div className="div11">-</div>
                    </div>
                    <div className="wrapper3">
                      <div className="div12">-</div>
                    </div>
                  </div>
                  <div className="frame-parent10">
                    <div className="show-container">
                      <img className="show-icon4" alt="" src="/show-1.svg" />
                      <div className="filled-name3">Filled Name</div>
                    </div>
                    <div className="jan-12-2024-container">
                      <div className="jan-12-20243">Jan 12, 2024</div>
                    </div>
                    <div className="jan-14-2024-container">
                      <div className="jan-14-20243">Jan 14, 2024</div>
                    </div>
                    <div className="muhammad-asad-container">
                      <div className="muhammad-asad3">Muhammad Asad</div>
                    </div>
                    <div className="wrapper4">
                      <div className="div13">+ 1 234 566 7890</div>
                    </div>
                    <div className="lorem-ipsum-dolor-sit-amet-container">
                      <div className="lorem-ipsum-dolor3">
                        Lorem ipsum dolor sit amet
                      </div>
                    </div>
                    <div className="wrapper5">
                      <div className="div14">-</div>
                    </div>
                    <div className="wrapper6">
                      <div className="div15">-</div>
                    </div>
                    <div className="wrapper7">
                      <div className="div16">-</div>
                    </div>
                  </div>
                  <div className="frame-parent11">
                    <div className="show-parent1">
                      <img className="show-icon5" alt="" src="/show-1.svg" />
                      <div className="filled-name4">Filled Name</div>
                    </div>
                    <div className="jan-12-2024-frame">
                      <div className="jan-12-20244">Jan 12, 2024</div>
                    </div>
                    <div className="jan-14-2024-frame">
                      <div className="jan-14-20244">Jan 14, 2024</div>
                    </div>
                    <div className="muhammad-asad-frame">
                      <div className="muhammad-asad4">Muhammad Asad</div>
                    </div>
                    <div className="wrapper8">
                      <div className="div17">+ 1 234 566 7890</div>
                    </div>
                    <div className="lorem-ipsum-dolor-sit-amet-frame">
                      <div className="lorem-ipsum-dolor4">
                        Lorem ipsum dolor sit amet
                      </div>
                    </div>
                    <div className="wrapper9">
                      <div className="div18">-</div>
                    </div>
                    <div className="wrapper10">
                      <div className="div19">-</div>
                    </div>
                    <div className="wrapper11">
                      <div className="div20">-</div>
                    </div>
                  </div>
                  <div className="frame-parent12">
                    <div className="show-parent2">
                      <img className="show-icon6" alt="" src="/show-1.svg" />
                      <div className="filled-name5">Filled Name</div>
                    </div>
                    <div className="jan-12-2024-wrapper1">
                      <div className="jan-12-20245">Jan 12, 2024</div>
                    </div>
                    <div className="jan-14-2024-wrapper1">
                      <div className="jan-14-20245">Jan 14, 2024</div>
                    </div>
                    <div className="muhammad-asad-wrapper1">
                      <div className="muhammad-asad5">Muhammad Asad</div>
                    </div>
                    <div className="wrapper12">
                      <div className="div21">+ 1 234 566 7890</div>
                    </div>
                    <div className="lorem-ipsum-dolor-sit-amet-wrapper1">
                      <div className="lorem-ipsum-dolor5">
                        Lorem ipsum dolor sit amet
                      </div>
                    </div>
                    <div className="wrapper13">
                      <div className="div22">-</div>
                    </div>
                    <div className="wrapper14">
                      <div className="div23">-</div>
                    </div>
                    <div className="wrapper15">
                      <div className="div24">-</div>
                    </div>
                  </div>
                  <div className="frame-parent13">
                    <div className="show-parent3">
                      <img className="show-icon7" alt="" src="/show-1.svg" />
                      <div className="filled-name6">Filled Name</div>
                    </div>
                    <div className="jan-12-2024-wrapper2">
                      <div className="jan-12-20246">Jan 12, 2024</div>
                    </div>
                    <div className="jan-14-2024-wrapper2">
                      <div className="jan-14-20246">Jan 14, 2024</div>
                    </div>
                    <div className="muhammad-asad-wrapper2">
                      <div className="muhammad-asad6">Muhammad Asad</div>
                    </div>
                    <div className="wrapper16">
                      <div className="div25">+ 1 234 566 7890</div>
                    </div>
                    <div className="lorem-ipsum-dolor-sit-amet-wrapper2">
                      <div className="lorem-ipsum-dolor6">
                        Lorem ipsum dolor sit amet
                      </div>
                    </div>
                    <div className="wrapper17">
                      <div className="div26">-</div>
                    </div>
                    <div className="wrapper18">
                      <div className="div27">-</div>
                    </div>
                    <div className="wrapper19">
                      <div className="div28">-</div>
                    </div>
                  </div>
                  <div className="frame-parent14">
                    <div className="show-parent4">
                      <img className="show-icon8" alt="" src="/show-1.svg" />
                      <div className="filled-name7">Filled Name</div>
                    </div>
                    <div className="jan-12-2024-wrapper3">
                      <div className="jan-12-20247">Jan 12, 2024</div>
                    </div>
                    <div className="jan-14-2024-wrapper3">
                      <div className="jan-14-20247">Jan 14, 2024</div>
                    </div>
                    <div className="muhammad-asad-wrapper3">
                      <div className="muhammad-asad7">Muhammad Asad</div>
                    </div>
                    <div className="wrapper20">
                      <div className="div29">+ 1 234 566 7890</div>
                    </div>
                    <div className="lorem-ipsum-dolor-sit-amet-wrapper3">
                      <div className="lorem-ipsum-dolor7">
                        Lorem ipsum dolor sit amet
                      </div>
                    </div>
                    <div className="wrapper21">
                      <div className="div30">-</div>
                    </div>
                    <div className="wrapper22">
                      <div className="div31">-</div>
                    </div>
                    <div className="wrapper23">
                      <div className="div32">-</div>
                    </div>
                  </div>
                  <div className="frame-parent15">
                    <div className="show-parent5">
                      <img className="show-icon9" alt="" src="/show-1.svg" />
                      <div className="filled-name8">Filled Name</div>
                    </div>
                    <div className="jan-12-2024-wrapper4">
                      <div className="jan-12-20248">Jan 12, 2024</div>
                    </div>
                    <div className="jan-14-2024-wrapper4">
                      <div className="jan-14-20248">Jan 14, 2024</div>
                    </div>
                    <div className="muhammad-asad-wrapper4">
                      <div className="muhammad-asad8">Muhammad Asad</div>
                    </div>
                    <div className="wrapper24">
                      <div className="div33">+ 1 234 566 7890</div>
                    </div>
                    <div className="lorem-ipsum-dolor-sit-amet-wrapper4">
                      <div className="lorem-ipsum-dolor8">
                        Lorem ipsum dolor sit amet
                      </div>
                    </div>
                    <div className="wrapper25">
                      <div className="div34">-</div>
                    </div>
                    <div className="wrapper26">
                      <div className="div35">-</div>
                    </div>
                    <div className="wrapper27">
                      <div className="div36">-</div>
                    </div>
                  </div>
                  <div className="frame-parent16">
                    <div className="show-parent6">
                      <img className="show-icon10" alt="" src="/show-1.svg" />
                      <div className="filled-name9">Filled Name</div>
                    </div>
                    <div className="jan-12-2024-wrapper5">
                      <div className="jan-12-20249">Jan 12, 2024</div>
                    </div>
                    <div className="jan-14-2024-wrapper5">
                      <div className="jan-14-20249">Jan 14, 2024</div>
                    </div>
                    <div className="muhammad-asad-wrapper5">
                      <div className="muhammad-asad9">Muhammad Asad</div>
                    </div>
                    <div className="wrapper28">
                      <div className="div37">+ 1 234 566 7890</div>
                    </div>
                    <div className="lorem-ipsum-dolor-sit-amet-wrapper5">
                      <div className="lorem-ipsum-dolor9">
                        Lorem ipsum dolor sit amet
                      </div>
                    </div>
                    <div className="wrapper29">
                      <div className="div38">-</div>
                    </div>
                    <div className="wrapper30">
                      <div className="div39">-</div>
                    </div>
                    <div className="wrapper31">
                      <div className="div40">-</div>
                    </div>
                  </div>
                  <div className="frame-parent17">
                    <div className="show-parent7">
                      <img
                        className="show-icon11"
                        loading="lazy"
                        alt=""
                        src="/show-1.svg"
                      />
                      <div className="filled-name10">Filled Name</div>
                    </div>
                    <div className="jan-12-2024-wrapper6">
                      <div className="jan-12-202410">Jan 12, 2024</div>
                    </div>
                    <div className="jan-14-2024-wrapper6">
                      <div className="jan-14-202410">Jan 14, 2024</div>
                    </div>
                    <div className="muhammad-asad-wrapper6">
                      <div className="muhammad-asad10">Muhammad Asad</div>
                    </div>
                    <div className="wrapper32">
                      <div className="div41">+ 1 234 566 7890</div>
                    </div>
                    <div className="lorem-ipsum-dolor-sit-amet-wrapper6">
                      <div className="lorem-ipsum-dolor10">
                        Lorem ipsum dolor sit amet
                      </div>
                    </div>
                    <div className="wrapper33">
                      <div className="div42">-</div>
                    </div>
                    <div className="wrapper34">
                      <div className="div43">-</div>
                    </div>
                    <div className="wrapper35">
                      <div className="div44">-</div>
                    </div>
                  </div>
                  <div className="frame-parent18">
                    <div className="show-parent8">
                      <img className="show-icon12" alt="" src="/show-1.svg" />
                      <div className="filled-name11">Filled Name</div>
                    </div>
                    <div className="jan-12-2024-wrapper7">
                      <div className="jan-12-202411">Jan 12, 2024</div>
                    </div>
                    <div className="jan-14-2024-wrapper7">
                      <div className="jan-14-202411">Jan 14, 2024</div>
                    </div>
                    <div className="muhammad-asad-wrapper7">
                      <div className="muhammad-asad11">Muhammad Asad</div>
                    </div>
                    <div className="wrapper36">
                      <div className="div45">+ 1 234 566 7890</div>
                    </div>
                    <div className="lorem-ipsum-dolor-sit-amet-wrapper7">
                      <div className="lorem-ipsum-dolor11">
                        Lorem ipsum dolor sit amet
                      </div>
                    </div>
                    <div className="wrapper37">
                      <div className="div46">-</div>
                    </div>
                    <div className="wrapper38">
                      <div className="div47">-</div>
                    </div>
                    <div className="wrapper39">
                      <div className="div48">-</div>
                    </div>
                  </div>
                  <div className="frame-parent19">
                    <div className="show-parent9">
                      <img className="show-icon13" alt="" src="/show-1.svg" />
                      <div className="filled-name12">Filled Name</div>
                    </div>
                    <div className="jan-12-2024-wrapper8">
                      <div className="jan-12-202412">Jan 12, 2024</div>
                    </div>
                    <div className="jan-14-2024-wrapper8">
                      <div className="jan-14-202412">Jan 14, 2024</div>
                    </div>
                    <div className="muhammad-asad-wrapper8">
                      <div className="muhammad-asad12">Muhammad Asad</div>
                    </div>
                    <div className="wrapper40">
                      <div className="div49">+ 1 234 566 7890</div>
                    </div>
                    <div className="lorem-ipsum-dolor-sit-amet-wrapper8">
                      <div className="lorem-ipsum-dolor12">
                        Lorem ipsum dolor sit amet
                      </div>
                    </div>
                    <div className="wrapper41">
                      <div className="div50">-</div>
                    </div>
                    <div className="wrapper42">
                      <div className="div51">-</div>
                    </div>
                    <div className="wrapper43">
                      <div className="div52">-</div>
                    </div>
                  </div>
                  <div className="frame-parent20">
                    <div className="show-parent10">
                      <img className="show-icon14" alt="" src="/show-1.svg" />
                      <div className="filled-name13">Filled Name</div>
                    </div>
                    <div className="jan-12-2024-wrapper9">
                      <div className="jan-12-202413">Jan 12, 2024</div>
                    </div>
                    <div className="jan-14-2024-wrapper9">
                      <div className="jan-14-202413">Jan 14, 2024</div>
                    </div>
                    <div className="muhammad-asad-wrapper9">
                      <div className="muhammad-asad13">Muhammad Asad</div>
                    </div>
                    <div className="wrapper44">
                      <div className="div53">+ 1 234 566 7890</div>
                    </div>
                    <div className="lorem-ipsum-dolor-sit-amet-wrapper9">
                      <div className="lorem-ipsum-dolor13">
                        Lorem ipsum dolor sit amet
                      </div>
                    </div>
                    <div className="wrapper45">
                      <div className="div54">-</div>
                    </div>
                    <div className="wrapper46">
                      <div className="div55">-</div>
                    </div>
                    <div className="wrapper47">
                      <div className="div56">-</div>
                    </div>
                  </div>
                </div>
                <div className="data-aggregator1">
                  <div className="input-filter1">
                    <div className="rectangle-parent">
                      <div className="frame-child" />
                      <div className="frame-item" />
                    </div>
                  </div>
                  <footer className="assetstable-footer">
                    <div className="arrow-left-02-wrapper">
                      <img
                        className="arrow-left-02-icon"
                        loading="lazy"
                        alt=""
                        src="/arrowleft02.svg"
                      />
                    </div>
                    <div className="wrapper48">
                      <div className="div57">1</div>
                    </div>
                    <div className="wrapper49">
                      <div className="div58">2</div>
                    </div>
                    <div className="wrapper50">
                      <div className="div59">3</div>
                    </div>
                    <div className="error-handler">4</div>
                    <div className="arrow-right-02-wrapper">
                      <img
                        className="arrow-right-02-icon"
                        loading="lazy"
                        alt=""
                        src="/arrowright02.svg"
                      />
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default MacBookPro16;