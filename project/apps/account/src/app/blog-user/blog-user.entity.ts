import {Entity} from "@project/core";
import {UserRole, AuthUser} from "@project/types";
import {compare, hash, genSalt} from  "bcrypt";
import {SALT_ROUNDS} from "./blog-user.constant";

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

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
