package hu.elte.myHotel.model;

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
public class Extra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    private User user;

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
    private boolean extrabed;

    @OneToOne
    private Booking booking;

}
