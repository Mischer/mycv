import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('User inserted with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('User updateded with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('User removed with id', this.id);
  }
}
