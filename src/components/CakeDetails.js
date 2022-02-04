import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCakeData } from "../actions/action";

class CakeDetails extends Component {
  
  componentDidMount() {
    this.props.fetchCakeData();
  }
  
  render() {
    // console.log("loading....", {key: this.props.loading});
    if(this.props.loading){
      return(
      <h1>loading....</h1>
      )}
      console.log("this.props", this.props);
    return (
      
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>flavours</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            
            {this.props.cake.map((u) => (
              <tr>
                <td>{u.id}</td>
                <td>{u.flavour}</td>
                <td>{u.Quantity}</td>
                <td>{u.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   data: state.data,
//   loading: state.loading
// });

const mapStateToProps = (state) => {
  console.log("state",state);
  return {
    data: state.cake.data,
    loading: state.cake.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCakeData: () => dispatch(fetchCakeData())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeDetails);
