import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import { signOut, signInWithGoogle } from '../../redux/actions/userAction';
import './header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,

  },
  AppBar: {
    backgroundColor: 'white',
    color: '#0077CC',
    fontSize: 10,
  },
  signUp: {
    marginRight: theme.spacing(1),

  },
}));

function Header({ dispatch }) {
  const userLocalStorage = JSON.parse(window.localStorage.getItem('user'));
  const userId = userLocalStorage?.user?._id;

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" className={classes.AppBar}>
          <Toolbar>
            <Link style={{ marginLeft: '40px' }} to="/" className="logo-home">
              <img
                src="https://trello-attachments.s3.amazonaws.com/5f9fe516582bea5ce01d06b2/5f9fe5242167b873b8f1f631/0c1019756f0969e79917b92aeebebab7/Screenshot_(264).png"
                alt="logo"
                className="logo"
              />
            </Link>

            {!userLocalStorage?.user ? (
              <Button
                id="button-login"
                color="inherit"
                className={classes.signIn}
                onClick={() => {
                  dispatch(signInWithGoogle());
                }}
              >
                Sign in
              </Button>
            ) : (
              <Button
                id="button-logOut"
                color="inherit"
                className={classes.signUp}
                onClick={() => dispatch(signOut())}
              >
                Sign Out
              </Button>
            )}
            {userLocalStorage?.user
              && (
              <div className="image-wrapper" style={{ marginRight: '40px' }}>
                <Link to={`user/${userId}`}>
                  <Avatar alt="Remy Sharp" src={userLocalStorage?.user.photo} />
                </Link>
              </div>
              )}

          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,

};
function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
  };
}
export default connect(mapStateToProps)(Header);
