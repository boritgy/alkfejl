package hu.elte.myHotel.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Extra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private boolean parking;

    @Column
    private boolean cleaning;

    @Column
    private boolean balcony;

    @Column
    private boolean view;

    @Column
    private boolean massage;

    @Column
    private boolean wellness;

    @Column
    private boolean extraBed;

    @OneToOne
    private Booking booking;
}
