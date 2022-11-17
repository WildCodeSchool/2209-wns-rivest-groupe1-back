import { Field, ObjectType } from 'type-graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Category } from './category';

@ObjectType()
@Entity()
export class Blog {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  label: string;

  @Field()
  @Column()
  createdAt: string;

  @Field()
  @Column()
  content: string;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];
}
