import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  findOne(filter: {
    where: { id?: string; username?: string; email?: string; role?: string;};
  }): Promise<User> {
    return this.userModel.findOne({ ...filter });
  }

  async create(
    createUserDto: CreateUserDto,
  ): Promise<User | { warningMessage: string }> {
    const user = new User();
    const existingByUserName = await this.findOne({
      where: { username: createUserDto.username },
    });
    const existingByEmail = await this.findOne({
      where: { email: createUserDto.email },
    });

    if (existingByUserName) {
      const fs = require("fs");
      var d = new Date(Date.now());
let text = `[Warinng] ${d.toString()} Попытка регистрации пользователя с существующим login \n`;

fs.appendFile("document.txt", text, function(err){
if(err){
  return console.log("error");
}
})
      return { warningMessage: 'Пользователь с таким именем уже существует' };
    }

    if (existingByEmail) {
      const fs = require("fs");
      var d = new Date(Date.now());
let text = `[Warinng] ${d.toString()} Попытка регистрации пользователя с существующим email \n`;

fs.appendFile("document.txt", text, function(err){
if(err){
  return console.log("error");
}
})
      return { warningMessage: 'Пользователь с таким email уже существует' };
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    user.username = createUserDto.username;
    user.password = hashedPassword;
    user.email = createUserDto.email;

    return user.save();
  }
}
