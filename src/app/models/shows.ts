
export class Shows {
  showname: string;
  premiered: string;
  status: string;

  constructor(args?) {
      this.showname = args.showname;
      this.premiered = args.premiered;
      this.status = args.status;
  }

}
