import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Blog } from "./blog";
import { Comment } from "./comment";
import { Tag } from "./tag";

@ObjectType()
@Entity()
export class Article {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  label: string;

  @Field()
  @Column()
  createdAt: string;

  @Field({ nullable: true })
  @Column()
  updateAt?: string;

  @Field({ nullable: true })
  @Column()
  publishedAt?: string;

  @Field()
  @Column()
  content: string;

  @Field()
  @Column()
  isPublished: boolean;

  @ManyToOne(() => Blog, (blog) => blog.articles)
  blogAndUserId: Blog;

  @ManyToMany(() => Tag)
  @JoinTable()
  categories: Tag[];

  // @OneToMany(() => Comment, (comment) => comment.)
  // public comments: Comment[];
}
