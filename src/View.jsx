import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const View = () => {
  const params = useParams();
  const id = params.id;
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id === parseInt(id));

  if (!existingUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">View User</div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="id">ID:</label>
                <input
                  type="text"
                  id="id"
                  className="form-control"
                  value={existingUser.id}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={existingUser.name}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={existingUser.email}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  className="form-control"
                  value={existingUser.phoneNumber}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
