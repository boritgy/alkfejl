package hu.elte.myHotel.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Date;
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
    @NotNull
    private Integer bed;

    @Column
    @NotNull
    @Enumerated(EnumType.STRING)
    private Meal meal;

    public enum Meal {
        BREAKFAST, HB, ALLINCLUSIVE
    }

    @Column
    private String arriveDate;

    @Column
    @NotNull
    private String leaveDate;

    @Column
    @NotNull
    private Integer roomNumber;

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

    @ManyToMany
    private List<Calendar> calendar;

    @ManyToOne
    private Room room;

    @OneToOne
    private Extra extra;

    @ManyToOne
    private User user;

    public void setUser(User user) {
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Integer getRoom() {
        return roomNumber;
    }

    public void add(Room r){
        //szoba hozzáadása a foglaláshoz
    }
}