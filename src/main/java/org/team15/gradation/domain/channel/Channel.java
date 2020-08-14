package org.team15.gradation.domain.channel;

import com.sun.javafx.css.converters.StringConverter;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.aspectj.weaver.EnumAnnotationValue;
import org.team15.gradation.domain.dailymission.DailyMission;
import org.team15.gradation.domain.user.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity
public class Channel {

    @Id
    @Column(name = "channel_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Convert(converter = StringCr)
    private Long id;

    @Column(name = "first_school",nullable = false)
    private String firstSchool;

    @Column(name = "second_school", nullable = false)
    private String secondSchool;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String category;

    @Column(name = "first_picture", nullable = false)
    private String firstPicture;

    @Column(name = "secondSchool", nullable = false)
    private String secondPicture;

    @Column(nullable = false)
    private Long owner;

    @ManyToMany(mappedBy = "channels")
    private List<User> users = new ArrayList<>();

    @OneToMany(mappedBy = "channel")
    private List<DailyMission> dailyMissions = new ArrayList<>();

    @Builder
    public Channel(String firstSchool, String secondSchool, String description, String category, String firstPicture, String secondPicture, Long owner) {
        this.firstSchool = firstSchool;
        this.secondSchool = secondSchool;
        this.description = description;
        this.category = category;
        this.firstPicture = firstPicture;
        this.secondPicture = secondPicture;
        this.owner = owner;
    }

    public void update(String firstSchool, String secondSchool, String description, String category, String firstPicture, String secondPicture) {
        this.firstSchool = firstSchool;
        this.secondSchool = secondSchool;
        this.description = description;
        this.category = category;
        this.firstPicture = firstPicture;
        this.secondPicture = secondPicture;
    }
}
