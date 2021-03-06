package org.team15.gradation.web.dto.post;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.team15.gradation.domain.post.Post;
import org.team15.gradation.service.S3Service;
import org.team15.gradation.web.dto.post.Likes.PostLikesResponseDto;
import org.team15.gradation.web.dto.post.comment.PostCommentResponseDto;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class PostResponseDto {
    private Long id;
    private String picture;
    private String content;
    private Long userId;
    private String userName;
    private String userPicture;
    private List<PostLikesResponseDto> likesId = new ArrayList<>();
    private List<PostCommentResponseDto> comments = new ArrayList<>();

    public PostResponseDto(Post entity) {
        this.id = entity.getId();
        this.picture = S3Service.CLOUD_FRONT_DOMAIN_NAME + "Post_" + entity.getId().toString();
        this.content = entity.getContent();
        this.userId = entity.getUser().getId();
        this.userName = entity.getUser().getName();
        this.userPicture = entity.getUser().getPicture();
        this.likesId = entity.getLikes().stream()
                .map(PostLikesResponseDto::new)
                .collect(Collectors.toList());
        this.comments = entity.getPostComments().stream()
                .map(PostCommentResponseDto::new)
                .collect(Collectors.toList());
    }
}
