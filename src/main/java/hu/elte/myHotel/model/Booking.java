package hu.elte.myHotel.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
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
    private String arriveDate;

    @Column
    private String leaveDate;

    @Column
    @NotNull
    private Integer people;

    public enum Status {
        NEW, DOING, DONE
    }

    @Column
    @Enumerated(EnumType.STRING)
    private Status status;

    @ManyToOne
    private User user;

    @OneToOne
    private Extra extra;

    @ManyToMany
    private List<Room> rooms;

    @ManyToOne
    private Calendar calendar;

    /*public void setExtra(Extra e){
        extra = e;
    }

    public Status getStatus(){
        return status;
    }

    public void setStatus(Status s){
        status = s;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setArriveDate(String arriveDate) {
        this.arriveDate = arriveDate;
    }

    public String getArriveDate() {
        return arriveDate;
    }

    public void setLeaveDate(String leaveDate) {
        this.leaveDate = leaveDate;
    }

    public String getLeaveDate() {
        return leaveDate;
    }

    public void setPeople(Integer people) {
        this.people = people;
    }

    public Integer getPeople() {
        return people;
    }

    public void setMeal(Meal meal) {
        this.meal = meal;
    }

    public Meal getMeal() {
        return meal;
    }*/
}