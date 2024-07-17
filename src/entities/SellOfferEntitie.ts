import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./CompanyEntities";
import { User } from "./UsesEntitie";
import { Stock } from "./StockEntities";
import { TransactionD } from "./TransactionEntitie";

@Entity()
export class SellOffer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("decimal", { precision: 6 })
  min_price: number;

  @Column()
  start_amount: number;

  @Column()
  date_limit: Date;

  @Column()
  actual: boolean;

  @OneToMany(() => TransactionD, (TransactionD) => TransactionD.sellOffer)
  transactions: TransactionD[];

  @ManyToOne(() => Stock, (stock) => stock.sellOffers)
  stock: Stock;

  @ManyToOne(() => User, (user) => user.sellOffers)
  user: User;
}
