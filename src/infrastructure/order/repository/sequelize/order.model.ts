import {
    Table,
    Model,
    PrimaryKey,
    Column,
    ForeignKey,
    BelongsTo,
    HasMany,
} from "sequelize-typescript";
import { OrderItemModel } from "./order-item.model";
import { CustomerModel } from "../../../customer/repository/sequelize/customer.model";


@Table({
    tableName: "orders",
    timestamps: false,
})
export class OrderModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @ForeignKey(() => CustomerModel)
    @Column({ allowNull: false })
    declare customer_id: string;
    
    @HasMany(() => OrderItemModel)
    declare items: OrderItemModel[];

    @BelongsTo(() => CustomerModel)
    declare customer: CustomerModel;

    @Column({ allowNull: false })
    declare total: number;
}