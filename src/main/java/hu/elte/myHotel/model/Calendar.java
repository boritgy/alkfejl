package hu.elte.myHotel.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Calendar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String arriveDate;

    @Column
    private String leaveDate;

    @JsonIgnore
    @OneToMany (mappedBy = "calendar")
    private List<Booking> bookings;

    @JsonIgnore
    @ManyToMany (mappedBy = "calendars")
    private List<Room> rooms;

}