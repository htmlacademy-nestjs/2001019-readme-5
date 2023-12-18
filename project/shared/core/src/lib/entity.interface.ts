import {Entity, EntityIdType} from "./repository.interface";

export interface Repository<T extends Entity<EntityIdType>> {
  findById(id: T['id']) : Promise<T | null>;
  deleteById(id: T['id']) : Promise<void>;
  save(entity: T) : Promise<T>;
  update(id: T['id'], entity: T) : Promise<T>;
}
