import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';

function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="container">
      <h2>CRUD App</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create+
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            let a = user.id;
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td> {/* Display the phone number */}
                <td>
                  <Link
                    to={`/edit/${a}`}
                    className="btn btn-sm btn-primary"
                    style={{ marginRight: '1rem' }}
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/view/${a}`}
                    className="btn btn-sm btn-primary"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(a)}
                    className="btn btn-sm btn-danger"
                    style={{ marginLeft: '1rem' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
    </div>
  );
}

export default Home;
