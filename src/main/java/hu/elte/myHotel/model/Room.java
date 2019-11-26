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
    private Boolean balcony;

    @Column
    private Integer price;

    @JsonIgnore
    @ManyToMany (mappedBy = "rooms")
    private List<Booking> bookings;

    @JsonIgnore
    @ManyToMany
    private List<Calendar> calendars;
}