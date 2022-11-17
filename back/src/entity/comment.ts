import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Comment {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  label: string;

  // @ManyToOne(() => Comment, (comment) => comment.)
  //  comments: Comment;
}
