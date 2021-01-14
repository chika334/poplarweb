import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Cards from "../Cards/Cards";
import wallet from "../../assets/images/wallet.png";
import businessreport from "../../assets/images/businessreport.png";
import cart from "../../assets/images/cart.png";
import workingtogether from "../../assets/images/workingtogether.png";
import { Link } from "react-router-dom";

// const styles = (theme) => ({
//   root: {
//     paddingLeft: 130,
//     paddingRight: 130,
//   },
//   title: {
//     margin: "auto",
//     height: 10,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop: "50px",
//     paddingBottom: "100px",
//     color: theme.palette.text.secondary,
//   },
//   text: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     color: theme.palette.text.secondary,
//   },
//   centerImage: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//   },
// });

// function Dashboard(props) {
// const { classes } = props;
// const preventDefault = (event) => {
//   console.log("Good")
// }
//   return (
//     <div className="appPadd">
//       <h2 className={classes.title}>Dashboard page</h2>
//       <div>
//         <div className="">
//           <div className="wrapper new">
//             {/* first card */}
//             <div className="first btn">
//               <Link href="/dashboard/buytoken" onClick={preventDefault}>
//                 <Cards>
//                   <h3 className={classes.text}>Buy Token</h3>
// <div className={classes.centerImage}>
//   <img width="65" src={cart} alt="cart" />
// </div>
//                 </Cards>
//               </Link>
//             </div>
//             {/* second card */}
//             <div className="second">
//               <Link href="/dashboard/report" onClick={preventDefault}>
//                 <Cards>
//                   <h3 className={classes.text}>Report</h3>
//                   <div className={classes.centerImage}>
//                     <img src={businessreport} alt="businessreport" />
//                   </div>
//                 </Cards>
//               </Link>
//             </div>
//             {/* 3rd card */}
//             <div className="third">
//               <Link href="#" onClick={preventDefault}>
//                 <Cards>
//                   <h3 className={classes.text}>Get Token</h3>
//                   <div className={classes.centerImage}>
//                     <img src={workingtogether} alt="workingtogether" />
//                   </div>
//                 </Cards>
//               </Link>
//             </div>
//           </div>
//           <div className="wrapper new">
//             {/*  4th card */}
//             <div className="first">
//               <Link href="#" onClick={preventDefault}>
//                 <Cards>
//                   <h3 className={classes.text}>Wallet</h3>
//                   <div className={classes.centerImage}>
//                     <img src={wallet} alt="Wallet" />
//                   </div>
//                 </Cards>
//               </Link>
//             </div>
//             {/* 5th card */}
//             <div className="second">
//               <Link href="#" onClick={preventDefault}>
//                 <Cards>
//                   <h3 className={classes.text}>Good</h3>
//                   <div className={classes.centerImage}>
//                     <img width="65" src={settings} alt="settings" />
//                   </div>
//                 </Cards>
//               </Link>
//             </div>
//             {/* 6th card */}
//             <div className="third">
//               <Link href="#" onClick={preventDefault}>
//                 <Cards>
//                   <h3 className={classes.text}>Good</h3>
//                   <div className={classes.centerImage}>
//                     <img width="65" src={settings2} alt="settings2" />
//                   </div>
//                 </Cards>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// Dashboard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Dashboard)

// import React from 'react';

const styles = (theme) => ({
  card: {
    width: "50px",
  },
  title: {
    margin: "auto",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "70px",
    color: theme.palette.text.secondary,
  },
  titles: {
    margin: "auto",
    // height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    color: theme.palette.text.secondary,
  },
  paddedAll: {
    margin: "auto",
    // height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  centerImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    //height: "100%"
  },
});

const sidebarItem = [
  {
    name: "Buy Token",
    url: "/powerweb/profile/dashboard/buytoken",
    src: `${cart}`,
  },
  {
    name: "Transactions Report",
    url: "/powerweb/profile/dashboard/report",
    src: `${businessreport}`,
  },
  {
    name: "Get Token",
    url: "/powerweb/profile/dashboard/together",
    src: `${workingtogether}`,
  },
  {
    name: "Wallet",
    url: "/powerweb/profile/dashboard/wallet",
    src: `${wallet}`,
  },
  {
    name: "Wallet Report",
    url: "/powerweb/profile/dashboard/reportwallet",
    src: `${wallet}`,
  },
  {
    name: "Debit Dallet",
    url: "/powerweb/profile/dashboard/debitwallet",
    src: `${wallet}`,
  },
];

const Services = (props) => {
  const { classes } = props;
  const preventDefault = (event) => {
    console.log("Good");
  };
  return (
    <div style={{ backgroundColor: "", marginTop: "30px" }} className="">
      <div className="news">
        {sidebarItem.map((allDetails, index) => (
          <div key={index} className="firster">
            <Link to={`${allDetails.url}`}>
              <Cards>
                <h3 className={classes.titles}>{allDetails.name}</h3>
                <div className={classes.centerImage}>
                  <img width="65" src={allDetails.src} alt="src" />
                </div>
                <h3 className={classes.titles}>{allDetails.figure}</h3>
              </Cards>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

Services.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);
