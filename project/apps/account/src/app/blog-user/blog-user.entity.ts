import {Entity} from "@project/core";
import {UserRole, AuthUser} from "@project/types";

export class BlogUserEntity implements AuthUser, Entity<string> {
  public id?: string;
  public role: UserRole;
  public email: string;
  public firstname: string;
  public lastname: string;
  public dateOfBirth: Date;
  public passwordHash: string;

  constructor(user: AuthUser)
  {
    this.populate(user);
  }

  public toPOJO()
  {
    return {
      id: this.id,
      role: this.role,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      dateOfBirth: this.dateOfBirth,
      passwordHash: this.passwordHash,
    }
  }

  public populate(data: AuthUser) : void
  {
    this.email = data.email;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.dateOfBirth = data.dateOfBirth;
    this.role = data.role;
  }
}
