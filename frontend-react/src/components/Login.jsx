import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const userData = {
      username: username,
      password: password,
    };

    console.log("userData:", userData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/token/",
        userData
      );

      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);

      setSuccess(true);
      console.log("Logged in successfully");

      setIsLoggedIn(true);
      navigate('/');

    } catch (error) {
      console.error(error.response?.data || error);
      setSuccess(false);
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 bg-light-dark p-5 mx-auto mt-5 rounded">
            <h3 className="text-light text-center mb-4">
              Login Our Portal
            </h3>

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              {success && (
                <div className="alert alert-success">
                  Logged in successfully!
                </div>
              )}

              <button
                type="submit"
                className="btn btn-info d-block mx-auto"
                disabled={loading}
              >
                {loading ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  'Login'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;