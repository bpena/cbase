export class User {
  username?: string;
  password?: string;
  displayName?: string;
  photoURL?: string;
  email?: string;
  firstName: string;
  lastName: string;

  set?(user: any) {
    if (user) {
      this.username = user.username ? user.username : user.email;
      this.displayName = user.displayName ? user.displayName : (user.firstName + ' ' + user.lastName);
      this.photoURL = user.photoURL;
      this.email = user.email;
    }
  }
}
