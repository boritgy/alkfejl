package hu.elte.myHotel.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name;

    @Column
    @Enumerated(EnumType.STRING)
    private Meal meal;

    public enum Meal {
        BREAKFAST, HB, ALLINCLUSIVE
    }

    @Column
    @NotNull
    private String arriveDate;

    @Column
    @NotNull
    private String leaveDate;

    @Column
    @NotNull
    private Integer price;

    @Column
    @NotNull
    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status {
        NEW, DOING, DONE
    }

    @Column
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Column
    @UpdateTimestamp
    private LocalDateTime modifiedAt;

    @ManyToOne
    private User user;

    @OneToOne
    private Extra extra;

    @JsonIgnore
    @ManyToMany
    private List<Room> rooms;

    @ManyToOne
    private Calendar calendar;
}