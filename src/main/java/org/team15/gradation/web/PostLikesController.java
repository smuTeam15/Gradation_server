package org.team15.gradation.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.team15.gradation.config.auth.LoginUser;
import org.team15.gradation.config.auth.dto.SessionUser;
import org.team15.gradation.service.post.PostLikesService;

@RequiredArgsConstructor
@Controller
public class PostLikesController {

    private final PostLikesService postLikesService;

    @PostMapping("/api/v1/post/likes/{postId}")
    public ResponseEntity save(@PathVariable("postId") Long postId,
                               @LoginUser SessionUser user) {

        return postLikesService.save(postId, user);
    }

    @GetMapping("/api/v1/post/likes/{postId}")
    public ResponseEntity findPostLikes(@PathVariable("postId") Long postId,
                                        @LoginUser SessionUser user) {

        return postLikesService.findPostLikes(postId, user);
    }

    @DeleteMapping("/api/v1/post/likes/{likesId}")
    public ResponseEntity delete(@PathVariable("likesId") Long likesId,
                                 @LoginUser SessionUser user) {

        return postLikesService.delete(likesId, user);
    }
}
