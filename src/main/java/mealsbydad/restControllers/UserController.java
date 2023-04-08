package mealsbydad.restControllers;

import mealsbydad.entities.User;
import mealsbydad.respositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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

    @GetMapping("/api/users/{user_id}")
    public User getUserByID(final @PathVariable long user_id) {
        final Optional<User> perhapsUser = userRepository.findById(user_id);
        return perhapsUser
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cannot find user " + user_id));
    }
}