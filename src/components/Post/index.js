import React from "react";
import PropTypes from "prop-types";
import { DivPost, ImgPost, ButtonDeletePost } from "./styles";

function Post({ id, title, deletePost }) {
  return (
    <DivPost data-aos='fade-up' data-aos-anchor-placement='bottom-center'>
      <ButtonDeletePost onClick={() => deletePost(id)}>X</ButtonDeletePost>
      <div>{title}</div>
      <ImgPost
        src={`https:///source.unsplash.com/random?sig=${id}`}
        alt='img'
      />
    </DivPost>
  );
}

Post.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default Post;
