import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router';

class PostsShow extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.post.id)
      .then(() => { this.context.router.push('/'); });
  }

  render() {
    // console.log(this.props.post);
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
        >
          DELETE POST
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
