import React from 'react';

function InitialForm(props) {

  const handleQuestionInputChange = event => props.onQuestionInputChange(event.target.value);
  const handleTypeInputChange = event => props.onTypeInputChange(event.target.value);

  const handleAddSubInputButtonClick = event => {
    event.preventDefault();

  };

  const renderForm = (array) => array.map((item, index) => {
    const question = item.question;
    const type = item.type;

    return(
      <form>
        Question:
        <input
          type="text"
          name="question"
          value={question}
          onChange={handleQuestionInputChange}
        />
        Type:
        <select onChange={handleTypeInputChange}>
          <option value={type}>{type}</option>
        </select>
        <button type="button">Add Sub-Input</button>
        <button type="button">Delete</button>
      </form>
    )
  });

  const allFormsSet = props.allFormsSet;

  return(
    <form>
      Question:
      <input
        type="text"
        name="question"
        onChange={handleQuestionInputChange}
      />
      Type:
      <select onChange={handleTypeInputChange}>
        <option value="">-- Select type --</option>
        <option value="Text">Text</option>
        <option value="Number">Number</option>
        <option value="Radio">Yes/No</option>
      </select>
      <button type="button">Add Sub-Input</button>
      <button type="button">Delete</button>
    </form>
  )
}
export default InitialForm;