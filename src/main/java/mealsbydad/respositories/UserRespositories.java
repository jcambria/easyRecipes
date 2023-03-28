package mealsbydad.respositories;

import mealsbydad.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRespositories extends CrudRepository<User,Long> {
}
