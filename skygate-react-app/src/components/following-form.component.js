import React from 'react';

function FollowingForm(props) {
  return(
    <form>
      Condition: Equals
      <select>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      Type:
      <select>
        <option value="Text">Text</option>
        <option value="Number">Number</option>
        <option value="Radio">Yes/No</option>
      </select>

    </form>
  )
}
export default FollowingForm;