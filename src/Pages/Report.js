import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "../component/Paper/Paper";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import "../css/report.css";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  title: {
    margin: "auto",
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  },
});

class Report extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="responsive-container">
          <h2 className={classes.title}>Transactions</h2>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>full name</th>
                <th>account number</th>
                <th>Payment type name</th>
                <th>Phone number</th>
                <th>title</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.props.transactions.transaction === null
                ? ""
                : this.props.transactions.transaction.map((result, index) => {
                    return (
                      <tr key={index}>
                        <td data-title="id">{result.response.id}</td>
                        <td data-title="Full Name">{result.response.paymentRequestid.fullname}</td>
                        <td data-title="Account Number">
                          {result.response.paymentRequestid.accountNumber}
                        </td>
                        <td data-title="Payment type name">
                          {
                            result.response.paymentRequestid.serviceproviderId
                              .paymentTypeid.paymentTypeName
                          }
                        </td>
                        <td data-title="Phone number">
                          {
                            result.response.paymentRequestid.serviceproviderId
                              .manager.phone
                          }
                        </td>
                        <td data-title="title">
                          {result.response.paymentRequestid.productCode.title}
                        </td>
                        <td data-title="Amount">{result.response.paymentRequestid.amount}</td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

export default connect(mapStateToProps, null)(withStyles(styles)(Report));
