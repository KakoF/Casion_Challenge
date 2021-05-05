import { UpdateDateColumn, CreateDateColumn, ObjectIdColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

export abstract class BaseEntity {
    @ObjectIdColumn()
    _id: string;

    @CreateDateColumn({ type: 'datetime', nullable: false })
    createAt: Date;

    @UpdateDateColumn({ type: 'datetime', nullable: true })
    updateAt: Date;

    /*@BeforeInsert()
    beforeInsertActions() {
        this.createAt = new Date((new Date()).getTime() + 24 * 60 * 60 * 1000)
        this.updateAt = null
    }

    @BeforeUpdate()
    beforeUpdateActions() {
        this.updateAt = new Date((new Date()).getTime() + 24 * 60 * 60 * 1000)
    }*/

}