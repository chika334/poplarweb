import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
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

class WalletReport extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="responsive-container">
          <h2 className={classes.title}>Wallet Report</h2>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Amount</th>
                <th>Refernce Number</th>
                <th>Source Name</th>
              </tr>
            </thead>
            <tbody>
              {this.props.wallet.wallet === null
                ? ""
                : this.props.wallet.wallet.map((result, index) => {
                    return (
                      <tr key={index}>
                        <td data-title="id">{result.id}</td>
                        <td data-title="Amount">{result.amount}</td>
                        <td data-title="Reference Number">
                          {result.reference}
                        </td>
                        <td data-title="Source Name">
                          {result.fundSourceid.sourceName}
                        </td>
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
  wallet: state.wallet,
});

export default connect(mapStateToProps, null)(withStyles(styles)(WalletReport));
