import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Article } from "./article";
import { Category } from "./category";

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

  @OneToMany(() => Category, (category) => category.blogAndUserId)
  public categories: Category;

  @OneToMany(() => Article, (article) => article.blogAndUserId)
  public articles: Article[];
}
