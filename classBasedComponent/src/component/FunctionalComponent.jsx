import React from "react";
class FunctionalComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0, //!first state variable
      count2: 1, //!second count variable
    };
  }
  async componentDidMount() {
    //!this function is called after constructer and render. when their work is finished the this function is called
    //?its most improtant useCase is to make an api call.
    const data = await fetch("https://api.github.com/users/Tani2007");
    const jsonData = await data.json();
    console.log(jsonData);
  }
  render() {
    const { sName } = this.props;
    return (
      <div>
        <h1>
          Functional Component {this.props.name} {sName}
        </h1>
        <h1>Count : {this.state.count}</h1>
        <h1>Count2 : {this.state.count2}</h1>
        <button
          className="bg-amber-300 rounded-2xl p-1"
          onClick={() => {
            //!never update your state directly
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Count
        </button>
      </div>
    );
  }
}
export default FunctionalComponent;
