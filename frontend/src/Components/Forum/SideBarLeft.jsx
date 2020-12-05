/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from 'react';
import './sideBarLeft.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import loadQuestion from '../../redux/actions/questionAction';

function DetailHeader({ tags, dispatch }) {
  return (

    <>
      <aside>
        <div className="add-question">
          <Link to="/tag">Add Question +</Link>
        </div>

      </aside>

      <aside className="wrapper-tags-fixed">
        <div className="wrapper-tags">
          {tags.map((tag) => (
            <Link
              to={`/${tag}`}
              className="tags__all"
              key={tag}
              onClick={() => dispatch(loadQuestion(tag))}
            >
              {tag}

            </Link>
          ))}
        </div>

      </aside>
      <aside>
        <div className="wrapper-tags">
          <Link to="/">All</Link>
        </div>
      </aside>

    </>
  );
}

function mapStateToProps({ questionReducer }) {
  // eslint-disable-next-line no-debugger
  return {
    tags: questionReducer.tags,
  };
}

export default connect(mapStateToProps)(DetailHeader);
