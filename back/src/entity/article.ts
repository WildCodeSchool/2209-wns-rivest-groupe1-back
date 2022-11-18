import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
  UpdateDateColumn,
  CreateDateColumn,
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
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field({ nullable: true })
  @Column()
  publishedAt?: Date;

  @Field()
  @Column()
  content: string;

  @Field()
  @Column()
  isPublished: boolean;

  // @Field()
  // @ManyToOne(() => Blog, (blog) => blog.articles, {
  //   onDelete: "CASCADE",
  // })
  // blogAndUserId: Blog;
  @ManyToOne(() => Blog, (blog) => blog.articles)
  blogAndUserId: Blog;

  @ManyToMany(() => Tag)
  @JoinTable()
  categories: Tag[];

  @OneToMany(() => Comment, (comment) => comment.article)
  public comments: Comment[];
}
