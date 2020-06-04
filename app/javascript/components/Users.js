import React from "react";
import PropTypes from "prop-types";
class Users extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      users: this.props.users,
    };
  }

  deleteUser(id) {
    console.log("delete user clicked")
    console.log(id);
  }
  
  renderUsers() {
    console.log("render Users");
    const {user } = state;

    return users.map((user => 9
      <li key = {user.id}>
        {`${user.flashcard_name}`))
  }
  
  render() {
    return (
      <div>
      {this.state.users.map((user) => {
    return <div>{`${user.flashcard_name}`}</div>;
     })}

    </div>
    );
  }
}

renderUsers() {
  
})
Users.propTypes = {
  users: PropTypes.array,
};
export default Users;