package mealsbydad.restControllers;

import mealsbydad.entities.User;
import mealsbydad.respositories.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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

    @GetMapping("api/users/{user_id}")
    public Optional<User> getUser(@PathVariable final long user_id) {
        return userRepository.findById(user_id);
    }
}