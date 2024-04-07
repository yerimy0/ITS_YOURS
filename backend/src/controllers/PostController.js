const PostService = require("../services/PostService");
/**
 * 커뮤니티 게시글 작성 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-05
 * 기능 : 게시글 작성 시 필요한 동작들을 모아놓은 컨트롤러입니다.
 */
const createPost = async (req, res, next) => {
  try {
    const { title, content, nickName, photos } = req.body;

    const postService = new PostService();
    const post = await postService.createPost({
      title,
      content,
      nickName,
      photos,
    });
    if (!post) {
      throw new Error("서버 오류 입니다.");
    }
    return res.status(200).json({ data: post, message: "글 작성 성공!!!" });
  } catch (err) {
    next(err);
  }
};

/**
 * 커뮤니티 모든 게시글 조회 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-05
 * 기능 : 게시글 리스트 조회시 필요한 동작들을 모아놓은 컨트롤러입니다.
 */
const getAllPosts = async (req, res, next) => {
  try {
    const postService = new PostService();
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

/**
 * 커뮤니티 게시글 수정 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-07
 * 기능 : 게시글 수정에 필요한 동작들을 모아놓은 컨트롤러입니다.
 */
const updatePost = async (req, res, next) => {
  const { title, content, photos } = req.body;

  try {
    const postService = new PostService();
    const updatedPost = await postService.updatePost(req.params.id, {
      title,
      content,
      photos,
    });
    if (!updatedPost) {
      return res.status(404).json({ message: "post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    next(err);
  }
};

/**
 * 커뮤니티 게시글 삭제 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-07
 * 기능 : 게시글 삭제에 필요한 동작들을 모아놓은 컨트롤러입니다.
 */
const deletePost = async (req, res, next) => {
  try {
    const postId = req.params.id; // URL 파라미터로부터 postId 추출
    const postService = new PostService();
    const deletedPost = await postService.deletePost(postId);

    if (!deletedPost) {
      // 이 경우는 postService.deletePost 메소드에서 적절히 처리되어야 합니다.
      // 예를 들어, 해당 postId를 가진 게시글이 없을 경우 null을 반환하거나, 에러를 throw할 수 있습니다.
      // 여기서는 게시글이 없는 경우에 대한 처리를 예시로 추가하였습니다.
      return res.status(404).send({ message: "게시글을 찾을 수 없습니다." });
    }

    // 삭제 성공 응답
    res
      .status(200)
      .send({ message: "게시글이 성공적으로 삭제되었습니다.", deletedPost });
  } catch (error) {
    console.error(error); // 에러 로깅을 추가하여 디버깅을 용이하게 합니다.
    // 삭제 실패 응답
    res.status(500).send({
      message: "게시글 삭제 중 오류가 발생했습니다.",
      error: error.message,
    });
  }
};

module.exports = { createPost, getAllPosts, updatePost, deletePost };
