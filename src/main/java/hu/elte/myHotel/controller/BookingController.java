package hu.elte.myHotel.controller;

import hu.elte.myHotel.model.Booking;
import hu.elte.myHotel.model.Extra;
import hu.elte.myHotel.repository.BookingRepository;
import hu.elte.myHotel.repository.ExtraRepository;
import hu.elte.myHotel.security.AuthenticatedUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private AuthenticatedUser authenticatedUser;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private ExtraRepository extraRepository;

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("")
    public Iterable<Booking> getBookings() {
        return bookingRepository.findAll();
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @PostMapping("")
    public ResponseEntity<Booking> createBooking(
            @RequestBody Booking booking
    ) {
        booking.setUser(authenticatedUser.getUser());
        Booking savedIssue = bookingRepository.save(booking);
        return ResponseEntity.ok(savedIssue);
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
            Booking savedIssue = bookingRepository.save(oldBooking);

            /*
            issue.setId(oldIssue.getId());
            issue.setMessages(oldIssue.getMessages());
            ...
             */

            return ResponseEntity.ok(savedIssue);
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

    @PostMapping("/{id}/messages")
    public ResponseEntity<Extra> addExtra(
            @RequestBody Extra extra,
            @PathVariable Integer id
    ) {
        Optional<Booking> oBooking = bookingRepository.findById(id);
        if (oBooking.isPresent()) {
            Booking booking = oBooking.get();
            booking.setExtra(extra);
            extra.setBooking(booking);
            Extra createdExtra = extraRepository.save(extra);
            return ResponseEntity.ok(createdExtra);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

}