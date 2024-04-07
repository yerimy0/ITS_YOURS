const { Posts } = require("../models");

class PostService {
  /**
   * 커뮤니티 글쓰기 service
   * 작성자 : 유경아
   * 작성 시작일 : 2024-04-05
   * 커뮤니티 글 작성시 동작되는 DB작업을 모아놓은 service입니다.
   */
  async createPost({ title, content, nickName, photos }) {
    const newPostData = {
      title,
      content,
      nickName, // 이 부분을 추가했습니다.
      photos,
    };

    const createPost = await Posts.create(newPostData);
    return createPost;
  }

  /**
   * 커뮤니티 전체 게시글 조회 service
   * 작성자 : 유경아
   * 작성 시작일 : 2024-04-05
   * 커뮤니티 글 작성시 동작되는 DB작업을 모아놓은 service입니다.
   */
  async getAllPosts() {
    return await Posts.find({});
  }

  /**
   * 커뮤니티 게시글 수정 service
   * 작성자 : 유경아
   * 작성 시작일 : 2024-04-07
   * 커뮤니티 글 수정에 동작되는 DB작업을 모아놓은 service입니다.
   */
  async updatePost(id, newData) {
    try {
      // 게시글 ID로 게시글을 찾고 업데이트합니다.
      const updatedPost = await Posts.findByIdAndUpdate(
        id,
        {
          title: newData.title, // 게시글 제목 업데이트
          content: newData.content, // 게시글 본문 업데이트
          photos: newData.photos, // 게시글 사진 업데이트, 선택적
        },
        { new: true }
      ); // 업데이트된 문서를 반환하도록 합니다.

      if (!updatedPost) {
        console.log("Post 어디에 있나요,,,?");
        return null; // 게시글을 찾지 못한 경우
      }
      return updatedPost; // 업데이트된 게시글 정보를 반환합니다.
    } catch (error) {
      console.error("Error updating the post:", error);
      throw error; // 오류 처리
    }
  }

  /**
   * 커뮤니티 게시글 삭제 service
   * 작성자 : 유경아
   * 작성 시작일 : 2024-04-07
   * 커뮤니티 글 삭제에 동작되는 DB작업을 모아놓은 service입니다.
   */
  async deletePost(postId) {
    try {
      const deletedPost = await Post.findByIdAndDelete(postId);
      if (!deletedPost) {
        throw new Error("게시글을 찾을 수 없습니다.");
      }
      return { message: "게시글이 성공적으로 삭제되었습니다." };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PostService;
