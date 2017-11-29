import { Injectable } from '@angular/core';

@Injectable()
export class LinksService {

  authServiceLink: string;
  userServiceLink: string;





 constructor() {
    this.authServiceLink = 'http://172.23.238.224:8090';
    this.userServiceLink = 'http://172.23.238.224:8090/users/';

  }

}
