import React, {PureComponent} from 'react';

class SingleMain extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      type: "",
    }
  }

  handleQuestionInputChange = event => {
    const input = event.target.value;
    this.setState({
      question: input,
    })
  };

  handleTypeInputChange = event => {
    const input = event.target.value;
    this.setState({
      type: input,
    })
  };

  createForm = () => {
    return(
      <form>
        <fieldset>
          Question:
          <input
            type="text"
            name="question"
            onChange={this.handleQuestionInputChange}
          />
          Type:
          <select onChange={this.handleTypeInputChange}>
            <option value="">-- Select type --</option>
            <option value="Text">Text</option>
            <option value="Number">Number</option>
            <option value="Radio">Yes/No</option>
          </select>
          <button type="button">Add Sub-Input</button>
          <button type="button">Delete</button>
        </fieldset>
      </form>
    )
  };

  createSubForm = () => {

  }

  render() {
    return(
      <div>
        {this.createForm()}
      </div>
    )
  }


}
export default SingleMain;