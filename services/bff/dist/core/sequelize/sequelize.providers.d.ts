import { SequelizeConfigService } from './sequelize.config.service';
export declare const sequelizeProviders: {
    provide: string;
    useFactory: (sequelizeConfigService: SequelizeConfigService) => Promise<void>;
    inject: (typeof SequelizeConfigService)[];
    exports: (typeof SequelizeConfigService)[];
}[];
