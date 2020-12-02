/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined'; import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import './questionList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import loadQuestion from '../../redux/actions/questionAction';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
    padding: theme.spacing(0.5),

  },

}));

function QuestionList({ dispatch, questionList }) {
  const classes = useStyles();
  useEffect(() => {
    if (!questionList || !questionList?.length) { dispatch(loadQuestion()); }
  }, [questionList?.length]);

  return (
    <>
      {questionList && questionList.length > 0 && questionList.map((question, index) => (
        <article className="question-article" key={index}>
          <div className="question-article__content">
            <div className="content-header">
              <div className="image-wrapper">
                <Avatar alt="Remy Sharp" src="https://avatars3.githubusercontent.com/u/12779984?s=400&u=bd7db8429aee0fa72d76fafd02a6edcdea784789&v=4" />

              </div>
              <div className="content-header__right">
                <div className="owner-name">
                  akash
                  {' '}
                </div>
                <div className="date-query">
                  Asked at:
                  {' '}
                  <span className="date">20 april 2020</span>
                  {' '}
                </div>
              </div>
              <div className="buttons-user-logged">
                <div>
                  <IconButton aria-label="delete" className={classes.margin}>
                    <DeleteOutlineOutlinedIcon fontSize="medium" />
                  </IconButton>
                </div>
                <div>
                  <IconButton aria-label="delete" className={classes.margin}>
                    <EditOutlinedIcon fontSize="medium" />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="content-question">
              <h2 className="question-title"><Link href="www.google.com">{question.questionTitle}</Link></h2>
              <div className="question__description">
                <p>
                  {' '}
                  {question.questionDescription}
                  {' '}
                </p>
              </div>
              <p className="tag">React</p>
            </div>
            <div className="content-footer">
              <div className="content-footer__left">
                <div className="icon-wrapper">
                  <ThumbUpAltOutlinedIcon fontSize="medium" />
                  <span>1</span>
                </div>
                <div className="icon-wrapper">
                  <ThumbDownOutlinedIcon fontSize="medium" />
                  <span>3</span>
                </div>
                <div className="icon-wrapper">
                  <QuestionAnswerOutlinedIcon fontSize="medium" />
                  <span>6</span>
                </div>
              </div>
            </div>
          </div>
        </article>

      ))}
    </>
  );
}

QuestionList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  questionList: PropTypes.arrayOf(PropTypes.object),
};
QuestionList.defaultProps = {
  questionList: [],
};

function mapStateToProps(state) {
  return {
    questionList: state.questionReducer.questionList,
  };
}

export default connect(mapStateToProps)(QuestionList);