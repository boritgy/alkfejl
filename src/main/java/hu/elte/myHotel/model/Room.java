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
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private Integer number;

    @Column
    private Integer capacity;

    @Column
    private boolean balcony;

    @Column
    private boolean extrabed;

    @Column
    private Integer price;

    @OneToMany(mappedBy = "room")
    private List<Booking> booking;

    @ManyToMany
    private List<Calendar> calendar;

    public void setBooking(Booking b) {
        booking.add(b);
    }
}
