import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PermissionsController } from "./permissions.controller";
import { PermissionsService } from "./permissions.service";
import { Permission } from "./entities/permission.entity";
import { RolePermission } from "./entities/role-permission.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Permission, RolePermission])],
  controllers: [PermissionsController],
  providers: [PermissionsService],
  exports: [PermissionsService],
})
export class PermissionsModule {}
