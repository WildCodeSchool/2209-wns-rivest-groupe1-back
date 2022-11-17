import { Blog } from "./blog";
import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Category {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  label: string;

  @ManyToOne(() => Blog, (blog) => blog.articles)
  blogAndUserId: Blog;
}
