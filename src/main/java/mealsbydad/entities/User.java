package mealsbydad.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

//@Entity
public class User {

    public String getUserName() {
        return userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPassword() {
        return password;
    }
   // @Id
    public long id;

    String userName;

    String firstName;

    String lastName;

    String password;

    public User(String userName, String firstName, String lastName, String password) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;

    }

}
