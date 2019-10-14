package hu.elte.myHotel.repository;

import hu.elte.myHotel.model.Room;
import org.springframework.data.repository.CrudRepository;

public interface RoomRepository extends CrudRepository<Room, Integer> {
}
