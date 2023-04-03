package mealsbydad.restControllers;

import mealsbydad.entities.User;
import mealsbydad.respositories.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController {

    final private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/api/users")
    public Iterable<User> getUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/api/user")
    public User postUser(final @RequestBody User user) {
        return userRepository.save(user);
    }
}q