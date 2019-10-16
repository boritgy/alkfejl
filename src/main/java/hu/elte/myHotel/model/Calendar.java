package hu.elte.myHotel.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Entity
@Data
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Calendar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //@Column
    //private Room rooms;

    @Column
    @NotNull
    private Date arriveDate;

    @Column
    @NotNull
    private Date leaveDate;

    @ManyToMany(mappedBy = "calendar")
    private List<Booking> booking;

    @ManyToMany(mappedBy = "calendar")
    private List<Room> room;
}
