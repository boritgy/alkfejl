package hu.elte.myHotel.controller;

import hu.elte.myHotel.model.Booking;
import hu.elte.myHotel.model.Room;
import hu.elte.myHotel.repository.BookingRepository;
import hu.elte.myHotel.repository.RoomRepository;
import hu.elte.myHotel.security.AuthenticatedUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private AuthenticatedUser authenticatedUser;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("")
    public Iterable<Booking> getBooking() {
        return bookingRepository.findAll();
    }

    @Secured({ "ROLE_USER", "ROLE_ADMIN" })
    @PostMapping("")
    public ResponseEntity<Booking> createBooking(
            @RequestBody Booking booking
    ) {
        booking.setUser(authenticatedUser.getUser());
        Booking savedBookings = bookingRepository.save(booking);
        return ResponseEntity.ok(savedBookings);
    }

    @Secured({ "ROLE_ADMIN" })
    @PatchMapping("/{id}")
    public ResponseEntity<Booking> modifyBooking(
            @PathVariable Integer id,
            @RequestBody Booking booking
    ) {
        Optional<Booking> oBooking = bookingRepository.findById(id);
        if (oBooking.isPresent()) {
            if (booking.getStatus() == null) {
                return ResponseEntity.badRequest().build();
            }
            Booking oldBooking = oBooking.get();
            oldBooking.setStatus(booking.getStatus());
            Booking savedBooking = bookingRepository.save(oldBooking);
            return ResponseEntity.ok(savedBooking);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Secured({ "ROLE_USER", "ROLE_ADMIN" })
    @DeleteMapping("/{id}")
    public ResponseEntity deleteBooking(
            @PathVariable Integer id
    ) {
        try {
            bookingRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{id}/room")
    public ResponseEntity<Room> addRoom(
            @RequestBody Room room,
            @PathVariable Integer id
    ) {
        Optional<Booking> oBooking = bookingRepository.findById(id);
        if (oBooking.isPresent()) {
            Booking booking = oBooking.get();
            booking.add(room);
            room.setBooking(booking);
            Room createdRoom = roomRepository.save(room);
            return ResponseEntity.ok(createdRoom);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

}
