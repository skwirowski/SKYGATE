import React, {PureComponent} from 'react';

import InitialForm from './initial-form.component';
import FollowingForm from './following-form.component';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAddFormButtonClicked: false,
      question: "",
      type: "",
      currentForm: {},
      currentFormSet: {},
      allFormsSet: [],

    }
  }

  handleAddFormButtonClick = () => {this.setState({
    isAddFormButtonClicked: true,
    });
  };

  handleQuestionInputChange = inputQuestionValue => this.setState({
    question: inputQuestionValue,
    });

  handleTypeInputChange = inputTypeValue => this.setState({
    type: inputTypeValue,
  });

  render() {
    const isClicked = this.state.isAddFormButtonClicked;

    if(isClicked) {
      return(
        <div>
          <InitialForm
            onQuestionInputChange={this.handleQuestionInputChange}
            onTypeInputChange={this.handleTypeInputChange}
            allFormsSet={this.state.allFormsSet}
          />
        </div>
      );
    } else {
      return(
        <div>
          <button type="button"
                  onClick={this.handleAddFormButtonClick}
          >
            Add Form
          </button>
        </div>
      );
    }
  }
}
export default Main;