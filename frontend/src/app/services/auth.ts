import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  private static lastId = 2;
  private users: IUser[] = [
    {
      id: '1',
      firstName: 'Ziad',
      lastName: 'Nasser',
      email: 'ziad@flux.com',
      password: '123',
    },
    {
      id: '2',
      firstName: 'Guest',
      lastName: 'User',
      email: 'guest@flux.com',
      password: '456',
    },
    {
      id: '3',
      firstName: 'Abdullah',
      lastName: 'Kamel',
      email: 'abdullah@flux.com',
      password: '789',
    },
  ];

  public currentUser: IUser | null = null;
  constructor() {}
  /**
   * Validates user credentials against the static array
   * @param email user input email
   * @param pass user input password
   * @returns boolean indicating if credentials are correct
   */
  validateUser(email: string, pass: string): boolean {
    const user = this.users.find((u) => u.email === email && u.password === pass);

    if (user) {
      // Set current user but remove password for security (best practice)
      const { password, ...userWithoutPassword } = user;
      this.currentUser = userWithoutPassword as IUser;
      return true;
    }
    return false;
  }

  // Clear session data on logout
  logout() {
    this.currentUser = null;
  }

  register(newUser: IUser): boolean {
    // Check if email already exists in our static array
    const exists = this.users.some((u) => u.email === newUser.email);

    if (exists) {
      return false; // Email already taken
    }

    Auth.lastId++;
    newUser.id = Auth.lastId.toString();
    this.users.push(newUser);
    return true; // Success
  }
  // Update current user data
  updateProfile(updatedData: Partial<IUser>) {
    if (!this.currentUser) return;

    // Merge new data into current user
    this.currentUser = { ...this.currentUser, ...updatedData };

    // Update the user in the main array as well
    const index = this.users.findIndex((u) => u.id === this.currentUser?.id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedData };
    }
  }
}
