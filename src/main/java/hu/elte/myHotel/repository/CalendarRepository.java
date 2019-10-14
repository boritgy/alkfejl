package hu.elte.myHotel.repository;

import hu.elte.myHotel.model.Calendar;
import org.springframework.data.repository.CrudRepository;

public interface CalendarRepository extends CrudRepository<Calendar, Integer> {
}
