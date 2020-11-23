import { Column, Entity, PrimaryColumn } from "typeorm";
import { uuid } from "uuidv4";

@Entity()
export class User {
    @PrimaryColumn()
    public readonly id: string

    @Column({
        length: 100
    })
    public name: string

    @Column({
        length: 100
    })
    public email: string

    @Column({
        length: 100
    })
    public password: string

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props)

        if (!id) {
            this.id = uuid()
        }
    }
}