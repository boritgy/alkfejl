package hu.elte.myHotel.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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
    private boolean extraBed;

    @Column
    private Integer price;

    /*@ManyToOne
    private User user;

    @JsonIgnore
    @ManyToOne*/
    private Booking booking;

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}
